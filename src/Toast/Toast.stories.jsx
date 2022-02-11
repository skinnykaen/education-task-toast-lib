import { toast } from "./../Class/ToastClass";

export default {
  title: "Toast",
  component: toast
};

export const ToastDefault = () => toast.create()

// ToastDefault.args = {

// };
