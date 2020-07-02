import React, { useContext, ChangeEvent, useState } from 'react';
import { FiUpload, FiSend } from 'react-icons/fi';

import './CodeEditor.css';

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
interface CodeEditorProps {
    id: string
}
const CodeEditor: React.FC<CodeEditorProps> = ({ id }) => {
    const languageContext = useContext(LanguageContext);
    const [lang, setLang] = useState("c_cpp");
    const [theme, setTheme] = useState("monokai");
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
    const onChangeHandler = (value: string) => {
        setContent(value);
    }
    const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        if (event.target.files?.length < 1) return;
        let reader = new FileReader();
        reader.onload = () => {
            let text = reader.result;
            console.log(text);
            if (typeof (text) == 'string')
                setContent(text);
        }
        reader.readAsText(event.target.files[0]);
        console.log(event.target);
    }
    return (
        <div className="editor-container">
            <Row>
                <Col md={3}>
                    <FormGroup>
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
                </Col>
                <Col md={{ span: 3, offset: 6 }}>
                    <FormGroup>
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
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
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
                            }}
                            style={{ width: "100%" }} />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <FormGroup>
                        <Form.Control onChange={fileHandler} type='file' id="source_file" className="hidden-inputfile" />
                        <Form.Label className="btn btn-warning btn-block" htmlFor={"source_file"}>
                            {languageContext.dictionary['SOURCE_FILE_LABEL']} <FiUpload />
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col md={{ span: 3, offset: 6 }}>
                    <StatusButton loadState={loadState} onClick={submitHandler}>
                        {languageContext.dictionary['SUBMIT_CODE']} <FiSend />
                    </StatusButton>
                </Col>
            </Row>
        </div>

    )
};
export default CodeEditor;