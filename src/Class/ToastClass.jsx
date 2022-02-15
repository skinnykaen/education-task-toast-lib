import React from "react";
import { Toast } from "../Toast/Toast";
import { Portal } from "../Toast/Portal";

import errorIcon from "../assets/error_icon.png";
import infoIcon from "../assets/info_icon.png";
import warningIcon from "../assets/warning_icon.png";
import successIcon from "../assets/success_icon.png";

let toasts = [];

class _Toast {
  constructor(toasts) {
    this.toasts = toasts;
  }

  // to do показывать последние, drop

  objectOfProperties(args) {
    // change backgroundColor && colorText for type
    if (toasts.length && toasts[toasts.length - 1].type === args.type) {
      this[args.type].backgroundColor = args.backgroundColor ? args.backgroundColor : this[args.type].backgroundColor;
      this[args.type].textColor = args.textColor ? args.textColor : this[args.type].textColor;
      this[args.type].icon = args.icon ? args.icon :this[args.type].icon ;
    }
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
    type: 'error',
    backgroundColor: 'red',
    colorText: 'white',
    icon: errorIcon,
  }
  warning = {
    type: 'warning',
    backgroundColor: 'yellow',
    colorText: 'black',
    icon: warningIcon,
  }
  info = {
    type: 'info',
    backgroundColor: 'blue',
    colorText: 'white',
    icon: infoIcon,
  }
  success = {
    type: 'success',
    backgroundColor: 'green',
    colorText: 'white',
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
