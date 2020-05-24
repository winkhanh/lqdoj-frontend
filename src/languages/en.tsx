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
    AUTH_BUTTON: "Sign in",
    DEAUTH_BUTTON: "Sign out"
};

export default en;