import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const toast = document.createElement("div");
  document.body.appendChild(toast);
  toast.setAttribute("id", "toast-root");

  const el = document.createElement("div");
  el.setAttribute("id", "toast-wrapper");

  useEffect(() => {
    toast.appendChild(el);
    return () => {
        toast.removeChild(el);
        document.getElementById("toast-root").remove();
    };
  }, [el, toast]);

  return createPortal(children, el);
};

export { Portal };
