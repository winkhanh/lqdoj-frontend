import React from 'react';

const AuthorizingPageContext = React.createContext({
    isDisplay:false,
    toggle: ()=>{}
});
const AuthState = React.createContext({
    isAuthed: true,
    isAdmin:false
});
export {AuthorizingPageContext , AuthState};