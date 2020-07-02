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
    MODAL_SIGNUP: "SING UP",
    FORM_USERNAME: "Username",
    FORM_USERNAME_PLACE_HOLDER: "Input username",
    FORM_EMAIL: "Email",
    FORM_EMAIL_PLACE_HOLDER:"Input Email",
    FORM_PASSWORD_1: "Password",
    FORM_PASSWORD_2: "Input password again",
    FORM_FIRSTNAME: "Firstname",
    FORM_LASTNAME: "Lastname",
    FORGET_PASSWORD: "Forget password?",
    LANGUAGE_LABEL: "Language",
    THEME_LABEL: "Theme",
    SUBMIT_CODE: "Submit",
    POST_AUTHOR_BY: "posted by ",
    SOURCE_FILE_LABEL: "Upload",
    CLEAR_FILTER: "Clear filter",
    FILTER_TITLE: "Filter",
    LABEL_TITLE: "Title",
    LABEL_AUTHOR: "Author",
    LABEL_TAG: "Tag"

};

export default en;