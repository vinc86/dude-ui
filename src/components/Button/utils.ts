import { colors } from "../Styles/styles";
import { ButtonColor, Colors } from "./types";

export const getFontColor = (background: Colors) => {
  switch (background) {
    case ButtonColor.ice:
    case ButtonColor.silver:
      return colors.midnight;
    default:
      return colors.white;
  }
};
