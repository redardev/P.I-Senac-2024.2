import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BlockPrice,
  BlockService,
  ButtonStyle,
  ContainerServices,
  TextStyle,
  TitleStyle,
  StyledCalendar,
} from "./ServicesStyle";
import { FaArrowLeftLong } from "react-icons/fa6";

const Services = () => {
  const [flagCalendar, setFlagCalendar] = useState(null);

  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();
  const handleButton = () => {
    setFlagCalendar(true);
  };
  const onChangeCalendar = (newDate) => {
    setDate(newDate);
    navigate("/agendamento")
  };

  return (
    <>
      {flagCalendar ? (
        <StyledCalendar
          onChange={onChangeCalendar}
          value={date}
          calendarType="gregory"
        />
      ) : null}
      <Link to={"/"}>
        <FaArrowLeftLong
          size={40}
          style={{ marginLeft: "6px", marginBottom: "-12px", color: "black" }}
        />
      </Link>
      <TitleStyle cl="#FF8C00">NOSSOS</TitleStyle>
      <TitleStyle cl="#0057FF" ml="84px">
        SERVIÇOS
      </TitleStyle>
      <ContainerServices>
        <BlockService>
          <BlockPrice>
            <TextStyle>Corte Cabelo</TextStyle> <TextStyle>R$ 35,00</TextStyle>
          </BlockPrice>
          <ButtonStyle onClick={handleButton}>Agendar</ButtonStyle>
        </BlockService>
        <BlockService>
          <BlockPrice>
            <TextStyle>Manicure</TextStyle> <TextStyle>R$ 25,00</TextStyle>
          </BlockPrice>
          <ButtonStyle onClick={handleButton}>Agendar</ButtonStyle>
        </BlockService>
        <BlockService>
          <BlockPrice>
            <TextStyle>Pedicure</TextStyle> <TextStyle>R$ 25,00</TextStyle>
          </BlockPrice>
          <ButtonStyle onClick={handleButton}>Agendar</ButtonStyle>
        </BlockService>
        <BlockService>
          <BlockPrice>
            <TextStyle>Design de Sobranceclhas</TextStyle>{" "}
            <TextStyle>R$ 35,00</TextStyle>
          </BlockPrice>
          <ButtonStyle onClick={handleButton}>Agendar</ButtonStyle>
        </BlockService>
        <BlockService>
          <BlockPrice>
            <TextStyle>Depilação</TextStyle> <TextStyle>R$ 50,00</TextStyle>
          </BlockPrice>
          <ButtonStyle onClick={handleButton}>Agendar</ButtonStyle>
        </BlockService>
        <BlockService>
          <BlockPrice>
            <TextStyle>Massagem Capilar</TextStyle>{" "}
            <TextStyle>R$ 60,00</TextStyle>
          </BlockPrice>
          <ButtonStyle onClick={handleButton}>Agendar</ButtonStyle>
        </BlockService>
        <BlockService>
          <BlockPrice>
            <TextStyle>Podologia</TextStyle> <TextStyle>R$ 45,00</TextStyle>
          </BlockPrice>
          <ButtonStyle onClick={handleButton}>Agendar</ButtonStyle>
        </BlockService>
      </ContainerServices>
    </>
  );
};

export default Services;
