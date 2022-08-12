import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../Styles/styles";
import { ButtonSize, Colors, Sizes } from "./types";
import { getFontColor } from "./utils";

const buttonSizes = {
  small: "7px 14px",
  medium: "10px 25px",
  large: "12px 62px",
};
const fontSize = {
  small: "14px",
  medium: "20px",
  large: "30px",
};

type Props = {
  label: string;
  rounded?: boolean;
  color?: Colors;
  size?: Sizes;
};

export const Button: FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  size = ButtonSize.Small,
  label,
  rounded = false,
  color = "ice",
  ...props
}) => {
  return (
    <ButtonComponent {...{ size }} {...{ rounded }} {...{ color }} {...props}>
      {label}
    </ButtonComponent>
  );
};

type StyleProps = {
  background?: string;
  color: string;
  rounded?: boolean;
  size: string;
};
const ButtonComponent = styled.button<StyleProps>((props) => {
  return `
        background: ${colors[props.color as keyof typeof colors]};
        font-size: ${fontSize[props.size as keyof typeof buttonSizes]};
        border-radius: ${props.rounded && "10px"};
        color: ${getFontColor(props.color)};
        border: none;
        font-weight: ${props.size === ButtonSize.Small ? 600 : 500};
        padding: ${buttonSizes[props.size as keyof typeof buttonSizes]};
    `;
});
