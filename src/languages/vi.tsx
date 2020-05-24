import { DictionaryType, StringIndexedType } from "./languages";

const vi: DictionaryType & StringIndexedType = {
    navItems: [
        ["0", "/", "Trang chủ"],
        ["1", "/problems", "Bài tập"],
        ["2", "/contests", "Kì thi"],
        ["3", "/submissions", "Bảng chấm bài"],
        ["4", "/faq", "FAQ"]
    ],
    NAV_ADMIN: "Trang quản trị",
    PROFILE_BUTTON: "Hồ sơ",
    AUTH_BUTTON: "Đăng nhập",
    DEAUTH_BUTTON: "Đăng xuất"
};

export default vi;