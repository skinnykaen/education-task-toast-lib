import React from "react";
import { v4 as uuidv4 } from 'uuid';

import { Toast } from "../Toast/Toast";
import { Portal } from "../Toast/Portal";
import ErrorBoundary from './../components/ErrorBoundary'

import { MAX_TOAST_LENGTH, ERROR_TOAST, INFO_TOAST, SUCCESS_TOAST, WARNING_TOAST } from '../constants/toast';
import { TOAST_POSITIONS } from '../constants/toastPosition';

let toasts = [];

class ToastLib {
  constructor() {
    if (typeof ToastLib.instance === 'object') {
      return ToastLib.instance
    }
    this.toasts = []
    ToastLib.instance = this
    return this
  }

  error = { ...ERROR_TOAST };
  info = { ...INFO_TOAST };
  success = { ...SUCCESS_TOAST };
  warning = { ...WARNING_TOAST };

  objectOfProperties(args) {
    // change backgroundColor && colorText &&  for type
    if (toasts.length && toasts[toasts.length - 1].TYPE === args.type) {
      this[args.type].BACKGROUND_COLOR = args.backgroundColor ? args.backgroundColor : this[args.type].BACKGROUND_COLOR;
      this[args.type].TEXT_COLOR = args.textColor ? args.textColor : this[args.type].TEXT_COLOR;
      this[args.type].ICON = args.icon ? args.icon : this[args.type].ICON;
    }
    this[args.type].ID = uuidv4();
    return { ...this[args.type] };
  }

  getCommonProp(obj) {
    return {
      autoDelete: obj.autoDelete,
      positionObj: TOAST_POSITIONS[obj.position],
      padding: obj.padding ? obj.padding : '5%',
      showDuration: obj.showDuration ? obj.showDuration : 5000,
      description: obj.description ? obj.description : 'toast example',
      heading: obj.heading ? obj.heading : 'toast',
      animation: obj.animation ? obj.animation : 'in-left',
    }
  }

  deleteToast(id) {
    this.toasts.splice(this.toasts.findIndex(toast => toast.ID === id), 1);
  }

  call(args) {
    if (toasts.length < MAX_TOAST_LENGTH) {
      toasts = [...toasts, this.objectOfProperties(args)];
    } else {
      toasts = [...toasts.splice(1), this.objectOfProperties(args)];
    }

    return (
      <ErrorBoundary>
        <Portal>
          <Toast
            toasts={toasts}
            commonProp={this.getCommonProp(args)}
          />
        </Portal>
      </ErrorBoundary>
    );
  }
}

const toast = new ToastLib();

export { toast };
