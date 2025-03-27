import { useState } from "react";
import logo from "../../assets/logo-sec.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ConfirmationContainer, TextStyle, TitleStyle, ButtonStyle } from "./ConfirmationStyle";

const Confirmation = () => {


  return (
    <>
      <Link to={"/servicos"}>
        <FaArrowLeftLong size={40} style={{ color: "black", margin:"12px" }} />
      </Link>
      <TitleStyle>Serviço Agendado!</TitleStyle>
      <ConfirmationContainer>
        <div>
          <TextStyle cor="#0057FF" fs="40px">
            Tipo Serviço:
          </TextStyle>
          <TextStyle>Corte Cabelo</TextStyle>
        </div>
        <div>
          <TextStyle cor="#0057FF" fs="40px">
            Horário Serviço:
          </TextStyle>
          <TextStyle>8:30</TextStyle>
        </div>
        <div>
          <TextStyle cor="#0057FF" fs="40px">
            Valor Serviço:
          </TextStyle>
          <TextStyle>R$ 35,00</TextStyle>
        </div>
      </ConfirmationContainer>
      <Link to={"/agendamento"}>
      <ButtonStyle>Cancelar Serviço</ButtonStyle>
      </Link>
    </>
  );
};

export default Confirmation;
