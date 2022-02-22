import { v4 as uuidv4 } from 'uuid';
import { MAX_TOAST_LENGTH, ERROR_TOAST, INFO_TOAST, SUCCESS_TOAST, WARNING_TOAST } from '../constants/toastType';
import { TOAST_POSITIONS } from './../constants/toastPosition';

class ToastClass {
    constructor() {
        if (ToastClass.instance) {
            return ToastClass.instance;
        }
        ToastClass.instance = this;
        this.toasts = [];
        this.error = { ...ERROR_TOAST };
        this.info = { ...INFO_TOAST };
        this.success = { ...SUCCESS_TOAST };
        this.warning = { ...WARNING_TOAST };
        return this;
    }

    getToastProperties(args) {
        this.setTypeProperties(args);
        return {
            id: uuidv4(),
            ...this[args.type],
            ...this.getCommonProperties(args),
        }
    }
    getCommonProperties(args) {
        return {
            autoDelete: args.autoDelete ? args.autoDelete : false,
            positionObj: args.position ? TOAST_POSITIONS[args.position] : {"bottom": "bottom: 20px", "right": "20px" },
            padding: args.padding ? args.padding : '5%',
            showDuration: args.showDuration ? args.showDuration : 5000,
            description: args.description ? args.description : 'toast example' ,
            heading: args.heading ? args.heading : 'toast',
            animation: args.animation ? args.animation : 'in-left',
        }
    }
    setTypeProperties(args) {
        if (this.toasts.length && args.type === this.toasts[this.toasts.length - 1].type) {
            this[args.type].background_color = args.backgroundColor ? args.backgroundColor : this[args.type].background_color;
            this[args.type].text_color = args.textColor ? args.textColor : this[args.type].text_color;
            this[args.type].icon = args.icon ? args.icon : this[args.type].icon;
        }
    }
    addToast(args) {
        if (this.toasts.length < MAX_TOAST_LENGTH) {
            this.toasts = [...this.toasts, this.getToastProperties(args)];
        } else {
            this.toasts = [...this.toasts.splice(1), this.getToastProperties(args)];
        }
    }

    deleteToast(id) {
        this.toasts.splice(this.toasts.findIndex(toast => toast.id === id), 1);
    }

    getToast() {
        return this.toasts;
    }
}

const toast = new ToastClass();

export default toast;