import React, { useEffect, useState } from "react";
import closeIcon from '../assets/close_icon.png';
import PropTypes from "prop-types";
import { toast as toastService} from './../ToastService/ToastService'

import {
  ToastWrapper,
  ToastContainer,
  TypeHeading,
  ToastContent,
  ToastDescription,
  ToastImage,
  CloseButton,
} from "./component";
import Draggable from "react-draggable";

export const Toast = (props) => {
  const { toasts, commonProp } = props;
  const [toastItems, setToasts] = useState([toasts]);

  useEffect(() => {
    setToasts([...toasts]);
  }, [toasts]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (commonProp.autoDelete && toasts.length && toastItems.length) {
        deleteToast(toasts[0].ID)
      }
    }, commonProp.showDuration)

    return () => {
      clearInterval(interval);
    };
  }, [toasts, toastItems, commonProp.showDuration, commonProp.autoDelete])

  function deleteToast(id) {
    toastService.deleteToast(id)
    toastItems.splice(toastItems.findIndex(toast => toast.ID === id), 1);
    setToasts([...toastItems]);
  }

  return (
    <ToastContainer common={commonProp}>

      {
        toastItems.map((toast, i) => {
          return (
            <Draggable axis="x" key={i} >
              <ToastWrapper common={commonProp} >
                <TypeHeading>{toast.TYPE + commonProp.heading}</TypeHeading>
                <ToastContent toast={toast} common={commonProp}>
                  <ToastDescription>
                    <ToastImage toast={toast}>
                      <img src={toast.ICON} />
                    </ToastImage>
                    {toast.TYPE + commonProp.description}
                  </ToastDescription>
                  <CloseButton onClick={() => { deleteToast(toast.ID) }}>
                    <img src={closeIcon} alt='close' />
                  </CloseButton>
                </ToastContent>
              </ToastWrapper>
            </Draggable>
          )
        })
      }
    </ToastContainer>
  );
};

Toast.propTypes = {
  toasts: PropTypes.array.isRequired,
  commonProp: PropTypes.object,
};
