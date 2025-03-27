import styled from "styled-components";

export const HoraContainer = styled.div`
  display: grid;
  height: 50vh;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  gap: 16px;
  margin-top: 24px;
`;

export const SpanStyle = styled.span`
  display: block;
  text-align: center;
  font-size: 32px;
  width: 150px;
  border-radius: 40px;
  height: 40px;
  background-color: ${(props) => props.bgCor || "#51C642"};
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
 
`;

export const TitleStyle = styled.h1`
  font-size: 72px;
  font-weight: 900;
  text-align: center;
  color: "black";
  margin-bottom:16px ;
  margin-top:-4px ;
`;