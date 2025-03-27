import styled from "styled-components";
import Calendar from "react-calendar";

export const ContainerServices = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 12px 0 12px 10vw;
  gap: 8px;
`;

export const BlockService = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const BlockPrice = styled.div`
  width: 250vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 6px;
  padding: 0 12px 6px 12px;
`;
export const ButtonStyle = styled.button`
  width: fit-content;
  height: fit-content;
  border-radius: 6px;
  margin-top: 6px;
`;

export const TextStyle = styled.p`
  font-size: 24px;
`;
export const TitleStyle = styled.h1`
  font-size: 72px;
  text-align: center;
  color: ${(props) => props.cl || "black"};
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt || "0"};
`;

export const StyledCalendar = styled(Calendar)`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40vw;
  height: fit-content;
  background-color: #dcdcdc;
  border-radius: 10px;

  .react-calendar__tile {
    background-color: #696969;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }

    &.react-calendar__tile--weekend {
      color: red;
    }
  }

  .react-calendar__navigation button {
    width: fit-content;
    background-color: #dcdcdc;
    color: #333; //
    border: 1px solid #dcdcdc;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .react-calendar__month-view__weekdays {
    background-color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: bold;
  }

  .react-calendar__month-view__weekdays__weekday {
    color: #ff8c00;
    align-items: center;
  }
`;
