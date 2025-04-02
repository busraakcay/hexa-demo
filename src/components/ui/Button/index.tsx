import * as React from "react";
import { Image, Pressable, View } from "react-native";
import { GradientContainer, Text } from "..";
import { styles } from "./styles";
import { ButtonProps } from "../../../types";

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
          <Text bold extraStyles={styles.buttonText} text={buttonTitle} />
          {iconName && <Image style={styles.icon} source={iconName} />}
        </View>
      </GradientContainer>
    </Pressable>
  );
};
