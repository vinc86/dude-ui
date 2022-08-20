import { Colors } from "../common/types";
import { styles } from "../Styles/";
import { ButtonColor } from "./types";

export const getFontColor = (background: Colors) => {
  switch (background) {
    case ButtonColor.ice:
    case ButtonColor.silver:
      return styles.colors.midnight;
    default:
      return styles.colors.white;
  }
};
