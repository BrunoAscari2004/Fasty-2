import styled from "styled-components";

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

export const BotaoAddCar = styled.button`
  height: 3.5rem;
  width: 15rem;
  color: red;
  background-color: white;

  border: solid red 2px;
  border-radius: 15px;

  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

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
