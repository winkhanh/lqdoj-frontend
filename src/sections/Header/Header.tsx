import React from 'react';
import Navigator from '../../components/Navigator/Navigator';
interface HeaderProps{
    
}
const Header : React.FC<HeaderProps> = (props:HeaderProps)=>{
    return(
        <div>
            <Navigator/>
        </div>
    );
};

export default Header;