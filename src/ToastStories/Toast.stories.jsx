import React from "react";
import toast from "../service/ToastClass";
import {App} from '../App';

export default {
  title: 'Toast',
  component: toast,
  argTypes: {
    type: {
      description: 'Type of toast',
      type: { required: true },
      defaultValue: 'info',
      options: ['success', 'error', 'info', 'warning'],
      control: { type: 'inline-radio'},
    },
    position: {
      type: { required: true },
      defaultValue: 'bottom-right',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: { type: 'inline-radio'}
    },
    autoDelete: {
      control: {
        type: 'boolean',
      },
    },
    showDuration: {
      control: {
        type: 'number',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    textColor: {
      control: {
        type: 'color',
      },
    },
    padding: {
      control: 'text'
    },

    description: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    heading: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    animation: {
      options: ['from-top', 'from-bottom', 'in-left', 'in-right'],
      control: {
        type: 'inline-radio'},
    },
    icon: {
      control: {
        type: "text",
      },
    },
  }
};

// export const ToastDefault = (args) => toast.addToast(args)
export const ToastDefault = (args) => <App {...args} />

ToastDefault.args = {
  type: 'info',
  position: 'bottom-right',
  textColor: '',
  padding: '10px',
  backgroundColor: '',
  autoDelete: false,
  showDuration: 5000,
  description: ' toast example',
  heading: ' toast',
  animation: 'in-left',
  icon: ''
};
