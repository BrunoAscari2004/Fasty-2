import fastIcon from "../../assets/fastIcon.svg";
import { HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <span>Fasty</span>
      <img src={fastIcon} alt="Fasty Logo" />
    </HeaderContainer>
  );
};
