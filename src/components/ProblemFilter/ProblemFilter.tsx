import React from 'react';
import ShadowedBox from '../ShadowedBox/ShadowedBox';
import UnderlinedTitle from '../UnderlinedTitle/UnderlinedTitle';
import {InputGroup, Form} from 'react-bootstrap';
import DifficultyButton from '../DifficultyButton/DifficultyButton';
export interface FilterState{
    difficult?:string,
    title?:string,
    author?:string,
    tag?:string
};
interface ProblemFilterProps{
    onChange: Function,
    filterState: FilterState
}
const ProblemFilter: React.FC<ProblemFilterProps> = ({onChange,filterState}:ProblemFilterProps)=>{
    const changeState = (state:string,val:string)=>{
        if (state==="title") 
            onChange((prev:FilterState)=>({
            ...prev,
            title:val
        }));
        if (state==="author")
            onChange((prev:FilterState)=>({
            ...prev,
            author:val
        }));
        if (state==="tag")
            onChange((prev:FilterState)=>({
            ...prev,
            tag:val
        }));
        if (state==="difficult")
            onChange((prev:FilterState)=>({
            ...prev,
            difficult:val
        }));
    };
    interface tempProps{
        difficulty:string
    }
    const ActivableDifficultyButton:React.FC<tempProps> = ({difficulty}:tempProps)=>{
        return (
            <DifficultyButton difficulty={difficulty} onClick={()=>{
                changeState("difficult",difficulty);
        
            }} active={difficulty===filterState.difficult}/>
        )
    };    
    
    return(
        <ShadowedBox>
            <div className="filter">
                <UnderlinedTitle>
                    Filter
                </UnderlinedTitle>
                <div>
                    <ActivableDifficultyButton difficulty="easy"/>
                    <ActivableDifficultyButton difficulty="medium"/>
                    <ActivableDifficultyButton difficulty="hard"/>
                </div>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" onChange={(e)=>{
                        console.log(e.target.value);
                        changeState("title",e.target.value);
                    }} value={filterState.title?filterState.title:""}/>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Author</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" onChange={(e)=>{
                        changeState("author",e.target.value);
                    }} value={filterState.author?filterState.author:""}/>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Tag</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" onChange={(e)=>{
                        changeState("tag",e.target.value);
                    }} value={filterState.tag?filterState.tag:""}/>
                </InputGroup>
                <InputGroup>
                    <button onClick={
                        ()=>{onChange({});}
                    }> Clear Filter </button>
                </InputGroup>
            </div>
        </ShadowedBox>
    )
};

export default ProblemFilter;