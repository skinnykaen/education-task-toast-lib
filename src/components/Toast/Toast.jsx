import React from 'react';
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import closeIcon from './../../assets/close_icon.png';
import Draggable from 'react-draggable';

import toast from './../../service/ToastClass';

import {
  ToastWrapper,
  ToastContainer,
  TypeHeading,
  ToastContent,
  ToastDescription,
  ToastImage,
  CloseButton,
} from "./components";

const Toast = ({ toasts, commonProp }) => {
  const [toastItems, setToasts] = useState(toasts);
  useEffect(() => {
    setToasts([...toasts]);
  }, [toasts]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (commonProp.autoDelete && toasts.length && toastItems.length) {
        deleteToast(toasts[0].id)
      }
    }, commonProp.showDuration)

    return () => {
      clearInterval(interval);
    };
  }, [toasts, toastItems, commonProp.showDuration, commonProp.autoDelete])

  function deleteToast(id) {
    toast.deleteToast(id)
    let toastItemsCopy = toastItems;
    toastItemsCopy.splice(toastItemsCopy.findIndex(toast => toast.id === id), 1);
    setToasts([...toastItemsCopy]);
  }

  return (
    <ToastContainer commonProp={commonProp}>
      {
        toastItems.map((toast, i) => {
          return (
            <Draggable axis="x" key={i} onStop={()=>{deleteToast(toast.id)}}>
              <ToastWrapper data-cy={'wrapper'} commonProp={commonProp} key={toast.id}>
                <TypeHeading data-cy={toast.type}>{toast.type + toast.heading}</TypeHeading>
                <ToastContent toast={toast}>
                  <ToastDescription>
                    <ToastImage toast={toast}>
                      <img src={toast.icon} />
                    </ToastImage>
                    {toast.type + toast.description}
                  </ToastDescription>
                  <CloseButton data-cy={'closeIcon' + toast.type} onClick={() => { deleteToast(toast.id) }}>
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

export default Toast;

Toast.propTypes = {
  toasts: PropTypes.array.isRequired,
  commonProp: PropTypes.object,
};
