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
    AUTH_BUTTON: "Sign in/Sign up",
    DEAUTH_BUTTON: "Sign out",
    MODAL_SIGNIN: "SIGN IN",
    MODAL_SIGNUP: "SIGN UP",
    FORM_NAME: "Name",
    FORM_NAME_PLACE_HOLDER: "What is your name",
    FORM_EMAIL: "Email",
    FORM_EMAIL_PLACE_HOLDER:"Enter email",
    FORM_PASSWORD: "Password",
    FORM_CHECKBOX: "stay login",
    POST_AUTHOR_BY: "posted by "

};

export default en;