import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 2px;
  margin-top: 8px;
`;

export const NavItem = styled.li`
  list-style-type: none;
  font-size: 24px;
  padding: 10px 20px;
  color: rgb(255, 150, 22);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2f94ff;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
`;

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bgColor || "#f0f0f0"};
  gap: 8px;
`;

export const SectionHome = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
`;

export const ButtonAgendar = styled.button`
  width: auto;
  height: fit-content;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 1%;
  padding-bottom: 8px;
  &:hover {
    transform: scale(0.9);
  }
`;

export const TextStyle = styled.p`
  font-size: 24px;
  margin-bottom: 36px;
  margin-left: 32px;
  color: ${(props) => props.cl || "black"};
`;
export const TitleSection = styled.h1`
  font-size: ${(props) => props.fs || "52px"};
  margin-bottom: ${(props) => props.mg || "46px"};
  margin-left: 32px;
  color: ${(props) => props.cl || "black"};
`;

export const HorarioTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: flex-start;
`;

export const LocalizationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: flex-start;
`;
