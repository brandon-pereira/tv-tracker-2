import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  position: relative;
  ${({ isPredicting }) =>
    isPredicting &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.8));
  `}
`;

export const Input = styled.input`
  position: relative;
  z-index: 1;
  border: 1px solid #888;
  padding: 1rem 1.4rem;
  width: 100%;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  outline: none;
  font-family: inherit;
  font-size: 1.2rem;
  &:focus {
    border: 1px solid blue;
  }
`;

export const Predictions = styled.div`
  margin-top: 1.3rem;
  border-radius: 10px;
  overflow: hidden;
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
