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
    AUTH_BUTTON: "Đăng nhập/Đăng kí",
    DEAUTH_BUTTON: "Đăng xuất",
    MODAL_SIGNIN: "ĐĂNG NHẬP",
    MODAL_SIGNUP: "ĐĂNG KÍ",
    FORM_NAME: "Tên",
    FORM_NAME_PLACE_HOLDER: "Họ và Tên",
    FORM_EMAIL: "Email",
    FORM_EMAIL_PLACE_HOLDER:"Nhập Email",
    FORM_PASSWORD: "Mật khẩu",
    FORM_CHECKBOX: "giữ đăng nhập"
};

export default vi;