import { ListaCars } from "./ListaCars/ListaCars";
import { BotaoAddCar, BotaoAddCarDiv, CarAddContainerStyled } from "./styles";
import { VscDiffAdded } from "react-icons/vsc";

export const CarAddContainer = () => {
  return (
    <CarAddContainerStyled>
      <BotaoAddCarDiv>
        <BotaoAddCar onClick={() => console.log("fui")}>
          <VscDiffAdded size={24} />
          <span>ADICIONAR CARRO</span>
        </BotaoAddCar>
      </BotaoAddCarDiv>
      <div>
        <ListaCars />
      </div>
    </CarAddContainerStyled>
  );
};
