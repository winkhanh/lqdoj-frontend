import React,{useContext, ReactNode} from "react";
import {AuthStateContext} from '../../Global/GlobalStates/GlobalStates';
interface AdminOnlyProps{
    children?: ReactNode
}
const AdminOnly : React.FC<AdminOnlyProps> = ({children}:AdminOnlyProps)=>{
    const {authState}=useContext(AuthStateContext);
    if (authState.getState().isAuthed && authState.getState().isStaff)
        return(
            <React.Fragment>
                {children}
            </React.Fragment>
        );
        else
        return <React.Fragment/>;
}
export default AdminOnly;