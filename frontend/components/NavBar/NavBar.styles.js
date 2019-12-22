import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e88e5;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5), inset 0 1px rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const Logo = styled.h1`
  color: blue;
  margin: 0;
  color: #fff;
  flex: 1;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
`;

export const SearchButton = styled.button`
  appearance: none;
  background: #fff;
  border-radius: 500px;
  border: none;
  width: 50px;
  height: 50px;
  font: inherit;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4);
  outline: none;
`;
export const Button = styled.button`
  appearance: none;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  border: none;
  font: inherit;
  display: inline-block;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 1rem;
  outline: none;
  &:focus {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.9),
      inset 0 0 0 2px rgba(255, 255, 255, 0.4);
  }
`;
