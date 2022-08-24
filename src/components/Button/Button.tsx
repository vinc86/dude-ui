import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../Styles";
import { Colors } from "../common/types";
import { ButtonSize, Sizes } from "./types";
import { getFontColor } from "./utils";

const buttonSizes = {
  small: "7px 14px",
  medium: "10px 25px",
  large: "12px 62px",
};
const fontSize = {
  small: "16px",
  medium: "20px",
  large: "30px",
};

type Props = {
  label: string;
  outlined?: boolean;
  rounded?: boolean;
  color?: Colors;
  size?: Sizes;
};

export const Button: FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  size = ButtonSize.Small,
  label,
  outlined = false,
  rounded = false,
  color = "ice",
  ...props
}) => {
    return (
      <ButtonComponent {...{ outlined }} {...{ size }} {...{ rounded }} {...{ color }} {...props}>
        {label}
      </ButtonComponent>
    );
  };

type StyleProps = {
  background?: string;
  color: string;
  rounded?: boolean;
  outlined?: boolean;
  size: string;
};
const ButtonComponent = styled.button<StyleProps>((props) => {

  return `
        background: ${!!props.outlined ? colors.white : colors[props.color as keyof typeof colors]};
        font-size: ${fontSize[props.size as keyof typeof buttonSizes]};
        border-radius: ${props.rounded && "50px"};
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        letter-spacing: 0.5px;
        color: ${props.outlined ? colors[props.color as keyof typeof colors] : getFontColor(props.color)};
        border: ${props.outlined ? `2px solid ${colors[props.color as keyof typeof colors]}` : "none"};
        font-weight: 600;
        display: flex;
        cursor: pointer;
        margin: auto;
        padding: ${buttonSizes[props.size as keyof typeof buttonSizes]};
    `;
});
