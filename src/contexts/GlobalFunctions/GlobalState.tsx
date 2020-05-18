import React from 'react';

const AuthorizingPageContext = React.createContext({
    isDisplay:false,
    toggle: ()=>{}
});

export {AuthorizingPageContext};