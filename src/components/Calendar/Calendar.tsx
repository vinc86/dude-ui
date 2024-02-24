import React from "react";
import { useEffect, useState } from "react";
import Day from "./Day";
import { MONTHS, formatDate, getDaysForMonth } from "./helpers";
import FeatureCarousel from "./FeatureCarousel";
import resetIcon from "./icons/reset.svg";
import styled from "styled-components";

export const Calendar = () => {
  const CURRENT_DATE = new Date();
  const CURRENT_DAY = CURRENT_DATE.getDate();
  const CURRENT_MONTH = CURRENT_DATE.getMonth();
  const CURRENT_YEAR = CURRENT_DATE.getFullYear();
  const MONTH_TO_STRING = MONTHS[CURRENT_MONTH];
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselElements, setCarouselElements] = useState<any>(null);
  const [selectedDay, setSelectedDay] = useState(CURRENT_DAY);
  const [selectedMonth, setSelectedMonth] = useState<any>(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR);
  const [workouts, setWorkouts] = useState<any>(null);
  const todayDate = `${CURRENT_YEAR}-${CURRENT_MONTH + 1}-${CURRENT_DAY}`;
  const data = [
    {
      dateCreated: 1702963224181,
      exercises: [
        {
          exerciseName: "Bench Press",
        },
        {
          exerciseName: "Deadlift",
        },
        {
          exerciseName: "Squat",
        },
      ],
    },
    {
      dateCreated: 1703263224181,
      exercises: [
        {
          exerciseName: "Squat",
        },
        {
          exerciseName: "Military press",
        },
        {
          exerciseName: "Curls",
        },
      ],
    },
    {
      dateCreated: 1703963224181,
      exercises: [
        {
          exerciseName: "Push down",
        },
        {
          exerciseName: "RDL",
        },
        {
          exerciseName: "Another one",
        },
      ],
    },
    {
      dateCreated: 1723963324184,
      exercises: [
        {
          exerciseName: "Bench Press",
        },
        {
          exerciseName: "Deadlift",
        },
        {
          exerciseName: "Squat",
        },
      ],
    },
  ];
  const selectedDate = `${selectedYear}-${
    MONTHS.indexOf(selectedMonth || MONTH_TO_STRING) + 1
  }-${selectedDay}`;
  const daysInAMonth = getDaysForMonth(
    selectedMonth || MONTH_TO_STRING,
    selectedYear
  );

  function resetDateToCurrentDate() {
    setSelectedYear(CURRENT_YEAR);
    setSelectedDay(CURRENT_DAY);
    setSelectedMonth(MONTHS[CURRENT_MONTH]);
  }
  useEffect(() => {
    setWorkouts(data);
    /* fetch("http://localhost:4000/workouts")
      .then((res) => res.json())
      .then((res) => setWorkouts(res)); */
  }, []);

  useEffect(() => {
    if (typeof selectedElement === "number") {
      setSelectedYear(selectedElement);
    } else {
      setSelectedMonth(selectedElement);
    }
  }, [selectedElement]);
  return (
    <Wrapper>
      <CalendarMainSection>
        <Header>
          <ButtonSecondary
            onClick={() => {
              const years = workouts.map((workout: any) => {
                const workoutDate = new Date(workout.dateCreated);
                const YEAR = workoutDate.getFullYear();
                return YEAR;
              });

              setShowCarousel(true);
              setCarouselElements([...new Set(years)]);
            }}
          >
            <Year>{selectedYear}</Year>
          </ButtonSecondary>
          <SubHeading>
            <ButtonSecondary
              onClick={() => {
                setShowCarousel(true);
                setCarouselElements(MONTHS);
              }}
            >
              {selectedMonth || MONTH_TO_STRING}
            </ButtonSecondary>

            {selectedDate !== todayDate && (
              <ButtonSecondaryFlexButtonBorder onClick={resetDateToCurrentDate}>
                Today
                <ResetIcon src={resetIcon.toString()} alt="reset" />
              </ButtonSecondaryFlexButtonBorder>
            )}
          </SubHeading>
        </Header>
        <DaysOuterWrapper>
          <DaysWrapper>
            {daysInAMonth.map((numeralDay) => {
              const DAILY_DATE = new Date(
                `${selectedYear}-${
                  selectedMonth || MONTH_TO_STRING
                }-${numeralDay}`
              );

              const dayFromDate = DAILY_DATE.getDay();
              const workoutsDate = workouts?.map((workout: any) =>
                new Date(workout.dateCreated).toLocaleDateString()
              );
              return (
                <Day
                  workoutIndex={workoutsDate?.indexOf(
                    DAILY_DATE.toLocaleDateString()
                  )}
                  key={numeralDay}
                  numeralDay={numeralDay}
                  dayFromDate={dayFromDate}
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                />
              );
            })}
          </DaysWrapper>
        </DaysOuterWrapper>
        <FeatureCarousel
          showCarousel={showCarousel}
          setShowCarousel={setShowCarousel}
          arrayOfElements={carouselElements}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
        />
      </CalendarMainSection>

      <TrackedWorkoutCard>
        {data.map((workout) => {
          const workoutDate = formatDate(workout.dateCreated);
          if (workoutDate === selectedDate) {
            return (
              <TrackedWorkoutCardInner key={workoutDate}>
                <ul>
                  {workout.exercises.map((exercise) => {
                    return (
                      <li key={exercise.exerciseName}>
                        {exercise.exerciseName}
                      </li>
                    );
                  })}
                </ul>
              </TrackedWorkoutCardInner>
            );
          }
        })}
      </TrackedWorkoutCard>
    </Wrapper>
  );
};

const SubHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 0px 5px;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  height: fit-content;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  z-index: 3;
`;

const CalendarMainSection = styled.div`
  .calendar-main-section {
    header {
      button {
        .year {
          font-size: 3rem;
          color: #8ba886;
        }
      }
    }
  }
`;

const Header = styled.header`
  button {
    color: #afc9ab;
    letter-spacing: 1px;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const ButtonSecondary = styled.button`
  border-bottom: 1px solid #afc9ab;
`;

const ButtonSecondaryFlexButtonBorder = styled.button`
  display: flex;
  align-items: center;
`;

const ResetIcon = styled.img`
  margin-left: 5px;
`;

const DaysOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DaysWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;

  .day {
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
  }

  .day-mobile {
    font-size: 1rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f7f7f7;
    border: none;
    margin: 7px;
    color: #8ba886;
    cursor: pointer;
  }

  .today {
    background-color: #8ba886;
    color: #fff;
    font-weight: 600;
  }

  .day-label {
    font-size: 0.8rem;
    color: #afc9ab;
  }

  .today-label {
    color: #fff;
    font-weight: 400;
  }
`;

const TrackedWorkoutCard = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
`;

const TrackedWorkoutCardInner = styled.div`
  height: 200px;
  width: 100%;
  border: 1px solid black;
  transform: translateY(-100%);
  transition: all 0.4s ease;
  transition-delay: 0.2s;
`;

const Year = styled.h1`
  font-size: 3rem;
  color: #8ba886;
`;

export default Calendar;
