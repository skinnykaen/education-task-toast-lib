import styled from "styled-components";

export const ToastContainer = styled.div`
    position: fixed;
    z-index: 999999;

    top: ${({ commonProp }) => commonProp.positionObj.top};
    bottom: ${({ commonProp }) => commonProp.positionObj.bottom};
    right: ${({ commonProp }) => commonProp.positionObj.right};
    left: ${({ commonProp }) => commonProp.positionObj.left};
`
export const ToastWrapper = styled.div`
    margin: 5%; 
    box-sizing: border-box;
    width: 25vw;

    margin-bottom: 40px;

    position: relative;

    top: ${({ commonProp }) => commonProp.positionObj.top};
    bottom: ${({ commonProp }) => commonProp.positionObj.bottom};
    right: ${({ commonProp }) => commonProp.positionObj.right};
    left: ${({ commonProp }) => commonProp.positionObj.left};

    transition: transform 0.6s ease-in;
    animation: '${({ commonProp }) => commonProp.animation}' 0.7s;

    @keyframes from-top {
        from {
        transform: translateY(-100%);
        }
        to {
        transform: translateY(0);
        }
    }

    @keyframes from-bottom {
        from {
        transform: translateY(100%);
        }
        to {
        transform: translateY(0);
        }
    }

    @keyframes in-left {
        from {
        transform: translateX(-100%);
        }
        to {
        transform: translateX(0);
        }
    }
    
    @keyframes in-right {
        from {
        transform: translateX(100%);
        }
        to {
        transform: translateX(0);
        }
    }
`

export const ToastContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    wigth: 100%;
    height: 100%;

    padding: ${({ toast }) => toast.padding};
    background-color: ${({ toast }) => toast.background_color};
    border-radius: 10px;
    color: ${({ toast }) => toast.text_color};
    transition: transform 0.6s ease-in-out;
`

export const ToastDescription = styled.div`
    display: flex; 
    align-items: center;
    width: 90%;
    height: 70%;
    font-size: 1.3rem;
    overflow: hidden;
`

export const TypeHeading = styled.div`
    color: grey;
`

export const CloseButton = styled.div`   
    height: 100%;
    float: right;
    box-sizing: border-box;
    cursor: pointer;

    img {
        width: 15px;
        height: 15px;
    }
`

export const ToastImage = styled.div`
    float: left;
    box-sizing: border-box;
    margin-right: 20px;

    img {
        width: 50px;
        height: 50px;
    }
`
