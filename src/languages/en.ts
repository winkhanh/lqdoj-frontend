import { DictionaryType, StringIndexedType } from "./languages";

const en: DictionaryType & StringIndexedType = {
    navItems: [
        ["0", "/", "Home"],
        ["1", "/problems", "Problems"],
        ["2", "/contests", "Contests"],
        ["3", "/submissions", "Submissions"],
        ["4", "/faq", "FAQ"]
    ],
    NAV_ADMIN: "Admin page",
    PROFILE_BUTTON: "Profile",
    AUTH_BUTTON: "Sign in/up",
    DEAUTH_BUTTON: "Sign out",
    MODAL_SIGNIN: "SIGN IN",
    MODAL_SIGNUP: "SIGN UP",
    FORM_NAME: "Name",
    FORM_NAME_PLACE_HOLDER: "What is your name",
    FORM_USERNAME: "Username",
    FORM_USERNAME_PLACE_HOLDER:"Enter username",
    FORM_PASSWORD: "Password",
    FORM_CHECKBOX: "stay login",
    FORGET_PASSWORD: "Quên mật khẩu?",
    POST_AUTHOR_BY: "posted by "

};

export default en;