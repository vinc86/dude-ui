import { Colors } from "../common/types";
import { colors } from "../Styles/";
import { ButtonColor } from "./types";

export const getFontColor = (background: Colors) => {
  switch (background) {
    case ButtonColor.ice:
    case ButtonColor.silver:
      return colors.midnight;
    default:
      return colors.white;
  }
};
