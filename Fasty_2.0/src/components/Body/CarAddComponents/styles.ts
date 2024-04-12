import styled, { css } from "styled-components";

export const CarAddContainerStyled = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const BotaoAddCarDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const baseButtonStyles = css`
  font-size: 16px;

  color: red;
  background-color: white;

  border: solid red 2px;
  border-radius: 15px;

  cursor: pointer;

  &:hover {
    color: #ca0808;
    border: solid 2px;
  }

  /* ripple effect*/

  background-position: center;
  transition: 0.4s;

  &:active {
    color: #ffffff;
    background-color: red;
    background-size: 100%;
    transition: 0s;
  }
`;

export const BotaoAddCar = styled.button`
  ${baseButtonStyles}
  height: 3.5rem;
  width: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const BotaoSaveCar = styled.button`
  ${baseButtonStyles}

  padding: 8px;
  margin-right: 20px;
  margin-bottom: 10px;
  transition: 0.1s;
`;

export const InputContainer = styled.div``;

export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  font-family: Roboto;
`;
