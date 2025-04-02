import * as React from "react";
import { Text as RNText } from "react-native";
import { textStyles } from "./styles";
import { TextProps } from "../../../types";

/**
 * `Text` is a reusable component for displaying styled text. It accepts various props to control the style of the text.
 * The component uses the `textStyles` function to dynamically apply styles based on the passed props like `title`, `subtitle`, `bold`, etc.
 *
 * @param {string} text - The text content to display.
 * @param {boolean} title - If true, applies the title style.
 * @param {boolean} subtitle - If true, applies the subtitle style.
 * @param {boolean} bold - If true, applies bold text style.
 * @param {boolean} thin - If true, applies thin text style.
 * @param {boolean} small - If true, applies small text style.
 * @param {boolean} extraSmall - If true, applies extra small text style.
 * @param {object} extraStyles - Additional custom styles to be applied to the text.
 *
 * @returns {JSX.Element} A styled text element.
 */
export const Text = ({
  text,
  title,
  subtitle,
  bold,
  thin,
  small,
  extraSmall,
  extraStyles,
}: TextProps): JSX.Element => {
  // Applying styles dynamically based on props
  const styles = textStyles({ bold, small, extraSmall, title, subtitle, thin });

  return (
    <RNText allowFontScaling={false} style={[styles.text, extraStyles]}>
      {text}
    </RNText>
  );
};
