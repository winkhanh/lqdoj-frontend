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
    FORM_USERNAME: "Tên tài khoản",
    FORM_USERNAME_PLACE_HOLDER: "Nhập tên tài khoản",
    FORM_EMAIL: "Email",
    FORM_EMAIL_PLACE_HOLDER:"Nhập Email",
    FORM_PASSWORD_1: "Mật khẩu",
    FORM_PASSWORD_2: "Nhập lại mật khẩu",
    FORM_FIRSTNAME: "Tên",
    FORM_LASTNAME: "Họ",
    FORGET_PASSWORD: "Quên mật khẩu?",
    LANGUAGE_LABEL: "Ngôn ngữ",
    THEME_LABEL: "Giao diện",
    SUBMIT_CODE: "Nộp bài",
    POST_AUTHOR_BY: "đăng bởi ",
    SOURCE_FILE_LABEL: "Chọn tệp"
};

export default vi;