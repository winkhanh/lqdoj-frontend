import React from 'react';
import './ShadowedBox.scss';
const ShadowedBox:React.FC = ({children}) =>{
    return (
        <div className="shadowed-box">
            {children}
        </div>
    )
};

export default ShadowedBox;