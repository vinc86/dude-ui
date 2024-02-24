import React from "react";
import styled, { css } from "styled-components";
import { DAYS, isMobile } from "./helpers";

const DayButton = styled.button`
  font-size: 1rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f7f7f7;
  position: relative;
  border: none;
  margin: 7px;
  color: #8ba886;
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 430px) {
    width: 62px;
    height: 62px;
  }

  &.today {
    background-color: #8ba886;
    color: #fff;
    font-weight: 600;
  }
`;

const DayLabel = styled.p`
  font-size: 0.8rem;
  color: #afc9ab;

  &.today-label {
    color: #fff;
    font-weight: 400;
  }
`;

const HasWorkout = styled.div`
  background: #8ba886;
  width: 7px;
  border-radius: 50%;
  height: 7px;
  position: absolute;
  right: 43%;
  bottom: 5px;

  &.hasWorkout__selected {
    background: #fff;
  }
`;

type DayContainerProps = {
  isMobile: boolean;
};

const DayContainer = styled.div<DayContainerProps>`
  ${({ isMobile }) => css`
    width: ${isMobile ? "50px" : "60px"};
    height: ${isMobile ? "50px" : "60px"};
  `}

  @media screen and (min-width: 430px) {
    width: 62px;
    height: 62px;
  }
`;

export default function Day({
  workoutIndex,
  numeralDay,
  dayFromDate,
  selectedDay,
  setSelectedDay,
}: any) {
  function handleButtonClick() {
    setSelectedDay(numeralDay);
  }

  const dayClassName = isMobile() ? "day-mobile" : "day";
  const hasWorkoutClassName =
    numeralDay === selectedDay ? "hasWorkout__selected" : "";

  return (
    <DayContainer isMobile={isMobile()}>
      <DayButton
        className={`${dayClassName} ${
          numeralDay === selectedDay ? "today" : ""
        }`}
        onClick={handleButtonClick}
      >
        {numeralDay}
        <DayLabel
          className={`${numeralDay === selectedDay ? "today-label" : ""}`}
        >
          {DAYS[dayFromDate].substr(0, 3)}
        </DayLabel>
        {workoutIndex !== -1 && (
          <HasWorkout className={hasWorkoutClassName}></HasWorkout>
        )}
      </DayButton>
    </DayContainer>
  );
}
