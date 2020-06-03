import { UserType } from '../../models';
class AuthState {
    private user: UserType;
    private authorized: boolean;
    private token: string;
    constructor(user?: UserType, token?: string) {
        if (user && token) {
            this.authorized = true;
            this.user = user;
            this.token = token;
        }
        else {
            this.authorized = false;
            this.token = "";
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
        return { isAuthed: this.authorized, isStaff: this.user.is_staff, user: this.user, token: this.token }
    }
}

export default AuthState;