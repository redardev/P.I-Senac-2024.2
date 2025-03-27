import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { HoraContainer, SpanStyle, TitleStyle } from "./ServiceAvailableStyle";

const ServiceAvailable = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/confirmacao");
  };
  return (
    <>
      <Link to={"/servicos"}>
        <FaArrowLeftLong
          size={40}
          style={{ marginLeft: "12px", marginTop:"12px", color: "black" }}
        />
      </Link>
      <TitleStyle>Horários</TitleStyle>
      <TitleStyle>Disponíveis</TitleStyle>
      <HoraContainer>
        <SpanStyle bgCor="red">8:00</SpanStyle>
        <SpanStyle onClick={handleNavigate}>8:30</SpanStyle>
        <SpanStyle onClick={handleNavigate}>9:00</SpanStyle>
        <SpanStyle bgCor="red">9:30</SpanStyle>
        <SpanStyle onClick={handleNavigate}>10:00</SpanStyle>
        <SpanStyle onClick={handleNavigate}>10:30</SpanStyle>
        <SpanStyle onClick={handleNavigate}>11:00</SpanStyle>
        <SpanStyle>11:30</SpanStyle>
        <SpanStyle bgCor="red">12:00</SpanStyle>
        <SpanStyle>12:30</SpanStyle>
        <SpanStyle>13:00</SpanStyle>
        <SpanStyle bgCor="red">13:30</SpanStyle>
        <SpanStyle>14:00</SpanStyle>
        <SpanStyle>14:30</SpanStyle>
        <SpanStyle>15:00</SpanStyle>
        <SpanStyle>15:30</SpanStyle>
        <SpanStyle>16:00</SpanStyle>
        <SpanStyle onClick={handleNavigate}>16:30</SpanStyle>
        <SpanStyle onClick={handleNavigate}>17:00</SpanStyle>
        <SpanStyle>17:30</SpanStyle>
      </HoraContainer>
    </>
  );
};

export default ServiceAvailable;
