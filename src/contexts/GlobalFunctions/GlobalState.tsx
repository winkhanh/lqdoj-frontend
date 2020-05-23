import React from 'react';

const AuthorizingPageContext = React.createContext({
    isDisplay:false,
    toggle: ()=>{}
});
const AuthState = React.createContext({
    isAuthed: false,
    isAdmin: true
});
export {AuthorizingPageContext , AuthState};