import React, { useContext, ChangeEvent, useState } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

import "ace-builds/src-noconflict/ext-language_tools";
import { Row, Form, FormGroup, Col } from 'react-bootstrap';
import { LanguageContext } from '../../Global/GlobalStates/GlobalStates';
import StatusButton from '../StatusButton/StatusButton';
import { LoadState } from '../../Global/GlobalFunctions/FetchingActions';

const languageSupport = [
    ["C++", "c_cpp"],
    ["Java", "java"],
    ["Python", "python"],
];

const themeSupport = [
    ["Github", "github"],
    ["Monokai", "monokai"],
    ["XCode", "xcode"]
];
interface CodeEditorProps{
    id:string
}
const CodeEditor: React.FC<CodeEditorProps> = ({id}) => {
    const languageContext = useContext(LanguageContext);
    const [lang, setLang] = useState("c_cpp");
    const [theme, setTheme] = useState("github");
    const [loadState, setLoadState] = useState(LoadState.NOTLOADING);
    const [content, setContent] = useState("");
    const languageSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setLang(event.target.value);
    }

    const themeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value);
    }

    const submitHandler = () => {
        setLoadState(LoadState.LOADING);
    }
    const onChangeHandler = (value:string)=>{
        setContent(value);
    }
    return (
        <>
            <Row>
                <AceEditor
                    mode={lang}
                    theme={theme}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={content}
                    onChange={onChangeHandler}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 4,
                    }} />
            </Row>

            <Row>
                <Col md={6}>
                    <Form>
                        <FormGroup controlId="lang-select">
                            <Form.Label>{languageContext.dictionary['LANGUAGE_LABEL']}</Form.Label>
                            <Form.Control as="select" custom onChange={languageSelectHandler} value={lang}>
                                {
                                    languageSupport.map((item, idx) => {
                                        return (
                                            <option key={idx} value={item[1]}>{item[0]}</option>
                                        );
                                    })
                                }
                            </Form.Control>
                        </FormGroup>
                        <FormGroup controlId="theme-select">
                            <Form.Label>{languageContext.dictionary['THEME_LABEL']}</Form.Label>
                            <Form.Control as="select" custom onChange={themeSelectHandler} value={theme}>
                                {
                                    themeSupport.map((item, idx) => {
                                        return (
                                            <option key={idx} value={item[1]}>{item[0]}</option>
                                        );
                                    })
                                }
                            </Form.Control>
                        </FormGroup>
                    </Form>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                    <StatusButton loadState={loadState} onClick={submitHandler}>
                        {languageContext.dictionary['SUBMIT_CODE']}
                    </StatusButton>
                </Col>
            </Row>
        </>

    )
};
export default CodeEditor;