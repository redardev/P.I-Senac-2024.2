import styled from "styled-components";

export const ConfirmationContainer = styled.div`
width: 80vw;
height: fit-content;
place-items: center;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
margin-top: 16px;
`

export const TextStyle = styled.p`
font-size: ${(props)=>props.fs || "32px"};
color: ${(props)=> props.cor || "black"};
`

export const TitleStyle = styled.h1`
color: #FF8C00;
font-size: 72px;
font-weight: 900;
text-align: center;
margin: 12px 0px;
`

export const ButtonStyle = styled.button`
margin-left: 40vw;
margin-top: 32px;
width: fit-content;
background-color: black;
border-radius: 8px;
align-items: center;
`