import React from 'react';
import './ShadowedBox.scss';
const ShadowedBox:React.FC = ({children}) =>{
    return (        
        <div className="shadow p-2 mb-3 bg-white rounded">
            {children}
        </div>
    )
};

export default ShadowedBox;