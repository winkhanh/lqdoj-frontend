import React from 'react';
import './UnderlinedTitle.scss';

const UnderlinedTitle: React.FC = ({children})=>{
    return(
        <div className="underlined-title">
            <h4>{children}</h4>
            <div className="line"></div>
        </div>
    )
};

export default UnderlinedTitle;