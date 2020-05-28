import React from 'react';
import './DifficultyButton.scss';
interface DifficultyButtonProps{
    difficulty:string,
    onClick?:Function,
    active?:boolean
}
const DifficultyButton:React.FC<DifficultyButtonProps> = ({difficulty,onClick,active}:DifficultyButtonProps)=>{
    return(
        <span onClick={
            ()=>{if (onClick)
                onClick();}
            } className={`dif-button dif-button-${difficulty} ${(active)?"dif-button-active":""} `}>
            {difficulty.slice(0,1).toUpperCase()+difficulty.slice(1)}
        </span>
    )
}

export default DifficultyButton;