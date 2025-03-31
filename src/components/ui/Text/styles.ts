import { StyleSheet } from "react-native";
import { colors } from "../../../theme";
import { TextOptionProps } from "../../../types";

export const textStyles = ({ bold, small, title, thin }: TextOptionProps) =>
  StyleSheet.create({
    text: {
      color: colors.white,
      fontWeight: bold || title ? "800" : thin ? "300" : "400",
      fontSize: title ? 20 : small ? 13 : 16,
      lineHeight: title ? 25 : thin ? 18 : 21,
      letterSpacing: bold || title ? 0.5 : 0.4,
      fontFamily: bold || title ? "ManropeBold" : "ManropeRegular",
    },
  });
