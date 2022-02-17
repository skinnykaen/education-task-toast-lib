import React, { useEffect, useState } from "react";
import closeIcon from '../assets/close_icon.png';
import PropTypes from "prop-types";

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
        deleteToast()
      }
    }, commonProp.showDuration)

    return () => {
      clearInterval(interval);
    };
  }, [toasts, toastItems, commonProp.showDuration, commonProp.autoDelete])

  function deleteToast(id) {
    toasts.splice(toasts.findIndex(e => e.id === id), 1);
    toastItems.splice(toastItems.findIndex(e => e.id === id), 1);
    setToasts([...toastItems]);
  }

  function onStop(e, id){
    console.log(e)
  }

  return (
    <ToastContainer common={commonProp}>

      {
        toastItems.map((e, i) => {
          return (
            <Draggable axis="x"  onStop={(event) => {  deleteToast(e.id)}} key={i}>
              <ToastWrapper common={commonProp} >
                <TypeHeading>{e.type + commonProp.heading}</TypeHeading>
                <ToastContent e={e} common={commonProp}>
                  <ToastDescription>
                    <ToastImage e={e}>
                      <img src={e.icon} />
                    </ToastImage>
                    {e.type + commonProp.description}
                  </ToastDescription>
                  <CloseButton onClick={() => { deleteToast(e.id) }}>
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

Toast.defaultProps = {
  // position: "bottom-right",
  // autoDelete: false,
};

Toast.propTypes = {
  toasts: PropTypes.array.isRequired,
  // position: PropTypes.string,
  // autoDelete: PropTypes.bool,
  // showDuration: PropTypes.number,
  // color: PropTypes.string,
  // padding: PropTypes.string,
  commonProp: PropTypes.object,
  // animation: PropTypes.string,
};
