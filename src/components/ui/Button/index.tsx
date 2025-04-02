import * as React from "react";
import { Image, Pressable, View } from "react-native";
import { GradientContainer, Text } from "..";
import { styles } from "./styles";
import { ButtonProps } from "../../../types";

/**
 * `Button` component represents a customizable button with an optional icon.
 *
 * @param buttonTitle - The text displayed on the button.
 * @param iconName - Optional icon to display alongside the text.
 * @param onPress - Function executed when the button is pressed.
 * @param extraStyles - Additional styles for custom styling.
 *
 * @returns A `Pressable` button wrapped in a `GradientContainer`.
 */
export const Button = ({
  buttonTitle,
  iconName,
  onPress,
  extraStyles,
}: ButtonProps): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonContainer, extraStyles]}>
      <GradientContainer>
        <View style={styles.outerContainer}>
          {/* Button text */}
          <Text bold extraStyles={styles.buttonText} text={buttonTitle} />
          {/* Optional icon */}
          {iconName && <Image style={styles.icon} source={iconName} />}
        </View>
      </GradientContainer>
    </Pressable>
  );
};
