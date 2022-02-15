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

export const Toast = (props) => {
  const { toasts, commonProp } = props;
  const [toastItems, setToasts] = useState([toasts]);

  useEffect(() => {
    setToasts([...toasts])
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

  function deleteToast(key) {
    toasts.splice(key, 1);
    toastItems.splice(key, 1);
    setToasts([...toastItems]);
  }

  return (
      <ToastContainer common={commonProp}>
        {
          toastItems.map((e, i) => {
            return (
                <ToastWrapper common={commonProp} key={i}>
                  <TypeHeading>{e.type + commonProp.heading}</TypeHeading>
                  <ToastContent e={e} common={commonProp}>
                    <ToastDescription>
                      <ToastImage e={e}>
                        <img src={e.icon} />
                      </ToastImage>
                      {e.type + commonProp.description}
                    </ToastDescription>
                    <CloseButton onClick={()=> {deleteToast(i)}}>
                      <img src={closeIcon} alt='close'/>
                    </CloseButton>
                  </ToastContent>
                </ToastWrapper>
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
