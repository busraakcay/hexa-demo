import * as React from "react";
import { Image, Pressable, View } from "react-native";
import { Text } from "..";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../theme";
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
      <LinearGradient
        colors={[colors.darkBlue, colors.purple1000]}
        locations={[0.1, 1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.outerContainer}>
          <Text bold extraStyles={styles.buttonText} text={buttonTitle} />
          {iconName && <Image style={styles.icon} source={iconName} />}
        </View>
      </LinearGradient>
    </Pressable>
  );
};
