import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    ${({ isOpen }) =>
        isOpen &&
        `
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  `}
`;

export const BackgroundMask = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
`;

export const Input = styled.input`
    appearance: none;
    background: #fff;
    border-radius: 50px;
    border: none;
    flex-shrink: 0;
    width: 50px;
    float: right;
    /* width: 100%; */
    height: 50px;
    transition: all 0.2s;
    font: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4);
    outline: none;
    align-self: flex-end;
    padding: 0 1rem;
    ${({ isActive }) =>
        isActive &&
        `
    width: 100%;
    display: block;
  `}
    &:focus {
        border: 1px solid blue;
    }
`;

export const Screen = styled.div`
    padding: 1rem;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    display: flex;
    visibility: hidden;
    transform: translateX(-100%);
    transition: all 1s;
    ${({ direction }) =>
        direction === 'ltr' ? 'transform: translateX(-100%);' : 'transform: translateX(100%);'}
    ${({ visible }) =>
        visible &&
        `
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
  `}
`;

export const Predictions = styled.div`
    margin-top: 1.3rem;
    border-radius: 10px;
    overflow-y: auto;
    width: 100%;
`;
export const Prediction = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
    margin-bottom: 1px;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    img {
        margin-right: 1rem;
        height: 120px;
        width: 82px;
        background: linear-gradient(#222, #000);
    }
`;

export const ShowDetails = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow-y: scroll;
    width: 100%;
    h1 {
        margin: 0;
    }
`;
