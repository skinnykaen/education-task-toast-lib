import erroricon from "../assets/error_icon.png";
import infoicon from "../assets/info_icon.png";
import warningicon from "../assets/warning_icon.png";
import successicon from "../assets/success_icon.png";

const ERROR_COLOR = '#CD5C5C';
const SUCCESS_COLOR = '#6B8E23';
const INFO_COLOR = '#87CEFA';
const WARNING_COLOR = '#FFA500';

export const MAX_TOAST_LENGTH = 3;

export const ERROR_TOAST = {
    type: 'error',
    background_color: ERROR_COLOR,
    text_color: 'white',
    icon: erroricon,
}
export const WARNING_TOAST = {
    type: 'warning',
    background_color: WARNING_COLOR,
    text_color: 'black',
    icon: warningicon,
}
export const INFO_TOAST = {
    type: 'info',
    background_color: INFO_COLOR,
    text_color: 'white',
    icon: infoicon,
}
export const SUCCESS_TOAST = {
    type: 'success',
    background_color: SUCCESS_COLOR,
    text_color: 'white',
    icon: successicon,
}
