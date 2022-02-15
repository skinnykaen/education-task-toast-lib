import styled from "styled-components";

export const ToastContainer = styled.div`
    position: fixed;
    z-index: 999999;

    top: ${({ common }) => common.positionObj.top};
    bottom: ${({ common }) => common.positionObj.bottom};
    right: ${({ common }) => common.positionObj.right};
    left: ${({ common }) => common.positionObj.left};
`
export const ToastWrapper = styled.div`
    margin: 5%; 
    box-sizing: border-box;
    width: 25vw;
    height: 20vh;

    margin-bottom: 40px;

    position: relative;

    top: ${({ common }) => common.positionObj.top};
    bottom: ${({ common }) => common.positionObj.bottom};
    right: ${({ common }) => common.positionObj.right};
    left: ${({ common }) => common.positionObj.left};

    transition: transform 0.6s ease-in;
    animation: '${({ common }) => common.animation}' 0.7s;

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
    align-items: center;
    wigth: 100%;
    height: 100%;

    padding: ${({ common }) => common.padding};
    background-color: ${({ e }) => e.backgroundColor};
    border-radius: 10px;
    color: ${({ e }) => e.textColor};
    transition: transform 0.6s ease-in-out;
`

export const ToastDescription = styled.div`
    display: flex; 
    align-items: center;
    width: 100%;
    height: 70%;
    font-size: 1.3rem;
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
        width: 25px;
        height: 25px;
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
