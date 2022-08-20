import React, { FC } from "react";
import styled from "styled-components";
import { styles } from "../Styles";

type Props = {
  label?: string;
  placeholder?: string;
  iconClass?: string;
  withShadows?: boolean;
  errorMessage?: string;
};
export const Input: FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  placeholder,
  iconClass,
  withShadows = false,
  errorMessage,
  ...props
}) => {
  return (
    <Container>
      <Label htmlFor={props.name}>{label}</Label>
      <InputContainer
        hasError={!!errorMessage || false}
        withShadows={withShadows}
      >
        {iconClass && (
          <IconContainer>
            <i className={iconClass}></i>
          </IconContainer>
        )}
        <InputField
          autoComplete="off"
          hasError={!!errorMessage || false}
          iconSet={!!iconClass || false}
          {...props}
        />
      </InputContainer>
      <ErrorMessage>{errorMessage || null}</ErrorMessage>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto;
  height: fit-content;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-around;
`;

const ErrorMessage = styled.p`
  color: #e93d3d;
  font-size: 0.9rem;
  margin: 0px;
  height: 25px;
  padding-left: 2px;
  width: 100%;
  /* position: relative;
  bottom: 10px;
  height: 15px; */
`;

const IconContainer = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 100%;
`;

const Label = styled.label`
  font-weight: 600;
  height: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
type InputProps = {
  iconSet: boolean;
  hasError: boolean;
};
const InputField = styled.input<InputProps>`
  height: 100%;
  width: ${({ iconSet }) => (iconSet ? "87%" : "100%")};
  border-radius: 5px;
  padding-left: 5px;
  font-size: 1rem;
  background: ${({ hasError }) => (hasError ? "#ff797933" : styles.colors.ice)};

  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;

  outline: none;
  /* &:focus {
    outline: ${({ hasError }) =>
    hasError ? "2px solid #e93d3d" : "2px solid #8df5df"};
  } */
`;

type ContainerProps = {
  withShadows: boolean;
  hasError: boolean;
};
const InputContainer = styled.div<ContainerProps>`
  border-radius: 5px;
  width: 100%;
  overflow: hidden;
  box-shadow: ${({ withShadows }) =>
    withShadows ? "4px 4px 10px #00000081" : "unset"};
  height: 45px;
  display: flex;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  border: ${({ hasError }) =>
    hasError ? "1px solid #e93d3d" : "1px solid#c2c2c2"};
`;
