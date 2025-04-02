import { StyleSheet } from "react-native";
import { colors } from "../../../theme";
import { TextOptionProps } from "../../../types";

export const textStyles = ({
  bold,
  small,
  extraSmall,
  title,
  subtitle,
  thin,
}: TextOptionProps) =>
  StyleSheet.create({
    text: {
      color: thin ? colors.dark500 : subtitle ? colors.dark300 : colors.white,
      fontWeight: bold || title ? "700" : thin || subtitle ? "300" : "400",
      fontSize: title ? 20 : small ? 13 : extraSmall ? 11 : bold ? 15 : 16,
      lineHeight: title ? 25 : thin ? 18 : 21,
      letterSpacing: title ? 0.5 : 0,
      fontFamily: bold || title ? "ManropeBold" : "ManropeRegular",
    },
  });
