import {UserType} from '../../models';
class AuthorState{
    private user : UserType;
    private authorized : boolean;
    constructor(token?:string){
        if (token)
            this.authorized=true;
        else
            this.authorized=false;

        this.user={
            username:"",
            first_name:"",
            last_name:"",
            email:"",
            is_staff:false,
            date_joined:""
        }
    }
    getState = ()=>{
        return {isAuthed:this.authorized,isStaff:this.user.is_staff}
    }
}

export default AuthorState;