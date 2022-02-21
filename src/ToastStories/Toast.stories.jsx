import { toast } from "../ToastService/ToastService";

export default {
  title: 'Toast',
  component: toast,
  argTypes: {
    type: {
      description: 'Type of toast',
      defaultValue: 'info',
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'info', 'warning'],
      },
    },
    position: {
      defaultValue: 'bottom-right',
      control: {
        type: 'inline-radio',
        options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      }
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
      control: {
        type: 'inline-radio',
        options: ['from-top', 'from-bottom', 'in-left', 'in-right'],
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
  }
};

export const ToastDefault = (args) => toast.add(args)

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
