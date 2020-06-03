import { UserType } from '../../models';
class AuthState {
    private user: UserType;
    private authorized: boolean;
    constructor(user?: UserType) {        
        if (user) {
            this.authorized = true;
            this.user = user;
        }
        else {
            this.authorized = false;
            this.user = {
                username: "",
                first_name: "",
                last_name: "",
                email: "",
                is_staff: true,
                date_joined: ""
            }
        }
    }
    getState = () => {
        return { isAuthed: this.authorized, isStaff: this.user.is_staff, user: this.user }
    }
}

export default AuthState;