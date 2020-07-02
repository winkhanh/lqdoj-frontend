import React, { useContext } from 'react';
import ShadowedBox from '../ShadowedBox/ShadowedBox';
import UnderlinedTitle from '../UnderlinedTitle/UnderlinedTitle';
import { Form, Button, Col, FormGroup, Row } from 'react-bootstrap';
import DifficultyButton from '../DifficultyButton/DifficultyButton';
import { LanguageContext } from '../../Global/GlobalStates/GlobalStates';
export interface FilterState {
    difficult?: string,
    title?: string,
    author?: string,
    tag?: string
};
interface ProblemFilterProps {
    onChange: Function,
    filterState: FilterState
}
const ProblemFilter: React.FC<ProblemFilterProps> = ({ onChange, filterState }: ProblemFilterProps) => {
    const languageContext = useContext(LanguageContext);
    const changeState = (state: string, val: string) => {
        if (state === "title") {
            onChange((prev: FilterState) => ({
                ...prev,
                title: val
            }));
        }
        if (state === "author") {
            onChange((prev: FilterState) => ({
                ...prev,
                author: val
            }));
        }
        if (state === "tag") {
            onChange((prev: FilterState) => ({
                ...prev,
                tag: val
            }));
        }
        if (state === "difficult") {
            onChange((prev: FilterState) => ({
                ...prev,
                difficult: val
            }));
        }
    };
    interface tempProps {
        difficulty: string
    }
    const ActivableDifficultyButton: React.FC<tempProps> = ({ difficulty }: tempProps) => {
        return (
            <DifficultyButton difficulty={difficulty} onClick={() => {
                changeState("difficult", difficulty);

            }} active={difficulty === filterState.difficult} />
        )
    };

    return (
        <ShadowedBox>
            <UnderlinedTitle>
                {languageContext.dictionary["FILTER_TITLE"]}
            </UnderlinedTitle>
            <Row>
                <Col>
                    <FormGroup>
                        <ActivableDifficultyButton difficulty="easy" />
                        <ActivableDifficultyButton difficulty="medium" />
                        <ActivableDifficultyButton difficulty="hard" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>
                            {languageContext.dictionary["LABEL_TITLE"]}
                        </Form.Label>
                        <Form.Control type="text" onChange={(e) => {
                            console.log(e.target.value);
                            changeState("title", e.target.value);
                        }} value={filterState.title ? filterState.title : ""} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>
                            {languageContext.dictionary["LABEL_AUTHOR"]}
                        </Form.Label>
                        <Form.Control type="text" onChange={(e) => {
                            changeState("author", e.target.value);
                        }} value={filterState.author ? filterState.author : ""} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>
                            {languageContext.dictionary["LABEL_TAG"]}
                        </Form.Label>
                        <Form.Control type="text" onChange={(e) => {
                            changeState("tag", e.target.value);
                        }} value={filterState.tag ? filterState.tag : ""} />
                    </FormGroup>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Button onClick={
                            () => { onChange({}); }
                        }
                            className="btn-warning btn-block"
                        >
                            {languageContext.dictionary["CLEAR_FILTER"]}
                        </Button>
                    </Col>
                </Col>
            </Row>
        </ShadowedBox >
    )
};

export default ProblemFilter;