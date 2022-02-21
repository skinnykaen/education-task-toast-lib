import errorIcon from "../assets/error_icon.png";
import infoIcon from "../assets/info_icon.png";
import warningIcon from "../assets/warning_icon.png";
import successIcon from "../assets/success_icon.png";

const ERROR_COLOR = '#CD5C5C';
const SUCCESS_COLOR = '#6B8E23';
const INFO_COLOR = '#87CEFA';
const WARNING_COLOR = '#FFA500';

export const MAX_TOAST_LENGTH = 3; 

export const ERROR_TOAST = {
    TYPE: 'error',
    BACKGROUND_COLOR: ERROR_COLOR,
    TEXT_COLOR: 'white',
    ICON: errorIcon,
}
export const WARNING_TOAST = {
    TYPE: 'warning',
    BACKGROUND_COLOR: WARNING_COLOR,
    textColor: 'black',
    ICON: warningIcon,
}
export const INFO_TOAST = {
    TYPE: 'info',
    BACKGROUND_COLOR: INFO_COLOR,
    TEXT_COLOR: 'white',
    ICON: infoIcon,
}
export const SUCCESS_TOAST = {
    TYPE: 'success',
    BACKGROUND_COLOR: SUCCESS_COLOR,
    TEXT_COLOR: 'white',
    ICON: successIcon,
}