import React from 'react';
import './UnderlinedTitle.scss';

const UnderlinedTitle: React.FC = ({children})=>{
    return(
        <div className="underlined-title">
            {children}
            <div className="line"></div>
        </div>
    )
};

export default UnderlinedTitle;