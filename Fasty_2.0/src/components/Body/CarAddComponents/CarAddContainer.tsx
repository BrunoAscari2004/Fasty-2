import { useState } from "react";
import { ListaCars } from "./ListaCars/ListaCars";
import {
  BotaoAddCar,
  BotaoAddCarDiv,
  BotaoSaveCar,
  CarAddContainerStyled,
  Input,
  InputContainer,
} from "./styles";
import { VscDiffAdded } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export const CarAddContainer = () => {
  const [isCarDialogOpen, setIsCarDialogOpen] = useState(false);

  const { control, handleSubmit } = useForm();

  return (
    <>
      <CarAddContainerStyled>
        <BotaoAddCarDiv>
          <BotaoAddCar onClick={() => setIsCarDialogOpen(true)}>
            <VscDiffAdded size={24} />
            <span>ADICIONAR CARRO</span>
          </BotaoAddCar>
        </BotaoAddCarDiv>
        <div>
          <ListaCars />
        </div>
      </CarAddContainerStyled>
      <Dialog
        open={isCarDialogOpen}
        onClose={() => {
          setIsCarDialogOpen(false);
        }}
        maxWidth="md"
      >
        <DialogTitle
          sx={{
            fontSize: "24px",
            color: "red",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Adicionar carro
          <IconButton>
            <IoMdClose onClick={() => setIsCarDialogOpen(false)} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <InputContainer style={{ width: 800 }}>
            <Input>
              <label htmlFor="carName">Nome:</label>
              <Controller
                name="carName"
                control={control}
                render={({ field }) => (
                  <TextField size="small" {...field} color="primary" />
                )}
              />
            </Input>
          </InputContainer>
        </DialogContent>
        <DialogActions>
          <BotaoSaveCar>SALVAR</BotaoSaveCar>
        </DialogActions>
      </Dialog>
    </>
  );
};
