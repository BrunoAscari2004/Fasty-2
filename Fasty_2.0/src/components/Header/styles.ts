import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};
  padding: 0px 22px;
  height: 5.2rem;
  border-bottom: solid black 3px;

  img {
    width: 60px;
    height: 60px;
    color: ${(props) => props.theme.white};
    filter: invert(1); /* Invert the colors of the SVG */
  }

  span {
    color: ${(props) => props.theme.white};
    font-size: 60px;
    font-family: "Faster One", system-ui;
  }
`;
