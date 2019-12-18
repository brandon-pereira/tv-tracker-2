import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0%, 10% {
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0; 
    } 25%, 75% {
        transform: perspective(140px) rotateX(0deg);
        opacity: 1; 
  } 90%, 100% {
        transform: perspective(140px) rotateY(180deg);
        opacity: 0; 
  }
`;

export const Box = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color || "#333"};
    animation: ${animation} 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }
`;

export const Container = styled.div`
  margin: 20px auto;
  width: 80px;
  height: 80px;
  position: relative;
  transform: rotateZ(45deg);
  ${Box}:nth-of-type(2) {
    transform: scale(1.1) rotateZ(90deg);
  }
  ${Box}:nth-of-type(4) {
    transform: scale(1.1) rotateZ(180deg);
  }
  ${Box}:nth-of-type(3) {
    transform: scale(1.1) rotateZ(270deg);
  }
  ${Box}:nth-of-type(2):before {
    animation-delay: 0.3s;
  }
  ${Box}:nth-of-type(4):before {
    animation-delay: 0.6s;
  }
  ${Box}:nth-of-type(3):before {
    animation-delay: 0.9s;
  }
`;
