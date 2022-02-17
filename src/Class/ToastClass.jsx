import React from "react";
import { Toast } from "../Toast/Toast";
import { Portal } from "../Toast/Portal";

import errorIcon from "../assets/error_icon.png";
import infoIcon from "../assets/info_icon.png";
import warningIcon from "../assets/warning_icon.png";
import successIcon from "../assets/success_icon.png";

let toasts = [];

const ERROR_COLOR = '#CD5C5C';
const SUCCESS_COLOR = '#6B8E23';
const INFO_COLOR = '#87CEFA';
const WARNING_COLOR = '#FFA500'

class _Toast {
  constructor(toasts) {
    this.toasts = toasts;
    this.state = {id: 0};
  }

  // to do drop

  objectOfProperties(args) {
    // change backgroundColor && colorText &&  for type
    if (toasts.length && toasts[toasts.length - 1].type === args.type) {
      this[args.type].backgroundColor = args.backgroundColor ? args.backgroundColor : this[args.type].backgroundColor;
      this[args.type].textColor = args.textColor ? args.textColor : this[args.type].textColor;
      this[args.type].icon = args.icon ? args.icon :this[args.type].icon ;
    }
    this.state.id = ++this.state.id;
    this[args.type].id = this.state.id;
    return { ...this[args.type] };
  }

  getCoor(position) {
    switch (position) {
      case 'bottom-right':
        return ({
          bottom: '20px',
          right: '20px',
        })
      case 'bottom-left':
        return ({
          bottom: '20px',
          left: '20px',
        })
      case 'top-right':
        return ({
          top: '20px',
          right: '20px',
        })
      case 'top-left':
        return ({
          top: '20px',
          left: '20px',
        })
      default:
        return ({
          bottom: '20px',
          right: '20px',
        })
    }
  }

  getCommonProp(obj) {
    let positionObj = this.getCoor(obj.position)

    return {
      autoDelete: obj.autoDelete,
      positionObj: positionObj,
      padding: obj.padding ? obj.padding : '5%',
      showDuration: obj.showDuration ? obj.showDuration : 5000,
      description: obj.description ? obj.description : 'toast example',
      heading: obj.heading ? obj.heading : 'toast',
      animation: obj.animation ? obj.animation : 'in-left', 
   
    }
  }

  error = {
    id: '',
    type: 'error',
    backgroundColor: ERROR_COLOR,
    textColor: 'white',
    icon: errorIcon,
  }
  warning = {
    id: '',
    type: 'warning',
    backgroundColor: WARNING_COLOR,
    textColor: 'black',
    icon: warningIcon,
  }
  info = {
    id: '',
    type: 'info',
    backgroundColor: INFO_COLOR,
    textColor: 'white',
    icon: infoIcon,
  }
  success = {
    id: '',
    type: 'success',
    backgroundColor: SUCCESS_COLOR,
    textColor: 'white',
    icon: successIcon,
  }
  create(args) {
    if (toasts.length < 3) {
      toasts = [...toasts, this.objectOfProperties(args)];
    }else{
      toasts = [...toasts.splice(1), this.objectOfProperties(args)];
    }


    return (
      <Portal>
        <Toast
          toasts={toasts}
          commonProp={this.getCommonProp(args)}
        />
      </Portal>
    );
  }
}

const toast = new _Toast(toasts);

export { toast };
