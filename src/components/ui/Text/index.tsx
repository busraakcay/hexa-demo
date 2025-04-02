import * as React from "react";
import { Text as RNText } from "react-native";
import { textStyles } from "./styles";
import { TextProps } from "../../../types";

export const Text = ({
  text,
  title,
  subtitle,
  bold,
  thin,
  small,
  extraStyles,
}: TextProps): JSX.Element => {
  const styles = textStyles({ bold, small, title, subtitle, thin });
  return (
    <RNText allowFontScaling={false} style={[styles.text, extraStyles]}>
      {text}
    </RNText>
  );
};
