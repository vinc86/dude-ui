import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const MonthsList = styled.ul`
  position: absolute;
  top: 0px;
  right: 0px;
  background: #fff;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

const ElementOfCarousel = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1.5rem;
  color: #afc9ab;
  width: 100%;
  padding: 10px 0px;

  &.selected-element {
    background-color: #8ba886;
    color: #fff;
    font-weight: 600;
  }

  &:hover {
    background-color: #e0eade;
  }
`;

export default function FeatureCarousel({
  arrayOfElements,
  showCarousel,
  setShowCarousel,
  selectedElement,
  setSelectedElement,
}: any) {
  useEffect(() => {}, []);
  if (!showCarousel || !arrayOfElements) {
    return null;
  }

  return (
    <MonthsList>
      {arrayOfElements.map((element: any) => {
        console.log("element", element);

        return (
          <li>
            <ElementOfCarousel
              className={
                selectedElement === element
                  ? "element-of-carousel selected-element"
                  : "element-of-carousel"
              }
              onClick={() => {
                setSelectedElement(element);
                setShowCarousel(false);
              }}
            >
              {element}
            </ElementOfCarousel>
          </li>
        );
      })}
    </MonthsList>
  );
}
