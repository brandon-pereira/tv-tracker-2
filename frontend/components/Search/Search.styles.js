import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  visibility: hidden;
  ${({ isPredicting }) =>
    isPredicting &&
    `

    visibility: visible;
  `}
`;

export const BackgroundMask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  /* filter: blur(5px); */
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
  ${({ isPredicting }) =>
    isPredicting &&
    `
    width: 100%;
    display: block;
  `}
  &:focus {
    border: 1px solid blue;
  }
`;

export const Predictions = styled.div`
  margin-top: 1.3rem;
  border-radius: 10px;
  overflow-y: scroll;
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
