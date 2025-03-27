import logoHome from "../../assets/logo-home.png";
import backHome from "../../assets/foto-home.png";
import horarioImg from "../../assets/foto-horarios.png";
import localizacaoImg from "../../assets/foto-localização.png";
import imageSobre from "../../assets/foto-sobre.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import {
  NavItem,
  NavList,
  NavbarContainer,
  Section,
  SectionHome,
  ButtonAgendar,
  TextStyle,
  TitleSection,
  HorarioTextContainer,
  LocalizationContainer,
} from "./HomeStyle.js";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();
  const handleButton = (url) => {
    navigate(url);
  };

  const handleSetSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <NavbarContainer>
        <NavList>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleSetSelected("home")}
          >
            <NavItem isSelected={selectedItem === "home"}>Home</NavItem>
          </Link>
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            onClick={() => handleSetSelected("sobre")}
          >
            <NavItem isSelected={selectedItem === "sobre"}>Sobre</NavItem>
          </Link>
          <Link
            to="horarios"
            smooth={true}
            duration={500}
            onClick={() => handleSetSelected("horarios")}
          >
            <NavItem isSelected={selectedItem === "horarios"}>Horários</NavItem>
          </Link>
          <Link
            to="localizacao"
            smooth={true}
            duration={500}
            onClick={() => handleSetSelected("localizacao")}
          >
            <NavItem isSelected={selectedItem === "localizacao"}>
              Localização
            </NavItem>
          </Link>
          <ButtonAgendar onClick={() => handleButton("/login")} bgColor="black">
            Agendar Horário
          </ButtonAgendar>
        </NavList>
      </NavbarContainer>

      <SectionHome id="home" bgImage={backHome}>
        <TitleSection fs="72px" cl="white" mg="6px">
          MAIS QUE UM CORTE
        </TitleSection>
        <TextStyle cl="white">
          Beleza, estética e bem-estar num só lugar!
        </TextStyle>
      </SectionHome>
      <Section id="sobre" bgColor="white">
        <div>
          <TitleSection>SOBRE</TitleSection>
          <TextStyle>
            <strong>O Senac</strong> dispõe de uma unidade especializada em
            serviços na área de beleza, estética e bem-estar para atender ao
            público em geral. O Salão Empresa Pedagógica conta com uma estrutura
            moderna e profissionais altamente qualificados, para proporcionar os
            cuidados que você precisa.
          </TextStyle>
          <TextStyle>
            São oferecidos serviços de manicure, pedicure, cortes masculinos e
            femininos, mechas e cuidados com todos os tipos de cabelo, design de
            sobrancelha, depilação, massagem, podologia, entre outros.
          </TextStyle>
        </div>
        <div>
          <img
            src={imageSobre}
            alt="Profissional cortando cabelo"
            className="imagem-sobre"
          />
        </div>
      </Section>

      <Section id="horarios" bgColor="#e9e9e9">
        <HorarioTextContainer>
          <TitleSection>
            <span>🕒</span> HORÁRIOS
          </TitleSection>
          <TextStyle>
            Segunda a sexta-feira, das 8h às 18h, sábados, das 9h às 15h.
          </TextStyle>
          <TextStyle>
            <strong>Contatos:</strong> (81) 3413.6688 / 6647
          </TextStyle>
        </HorarioTextContainer>
        <img src={horarioImg} alt="Atendimento" className="horario-imagem" />
      </Section>

      <Section id="localizacao" bgColor="white">
        <LocalizationContainer>
          <TitleSection>LOCALIZAÇÃO</TitleSection>
          <TextStyle>
            Endereço: R. do Pombal, 57 - Santo Amaro, Recife - PE, 50100-170
          </TextStyle>
        </LocalizationContainer>
        <img
          src={localizacaoImg}
          alt="Localização"
          className="imagem-localizacao"
        />
      </Section>
    </>
  );
};

export default Home;
