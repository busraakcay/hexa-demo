import React from "react";
import {
  createNavigationContainerRef,
  NavigationContainer as RNNavigationContainer,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../theme";

export const navigationRef = createNavigationContainerRef();

export const NavigationContainer = ({ children }): JSX.Element => {
  return (
    <RNNavigationContainer ref={navigationRef}>
      <LinearGradient
        colors={[colors.dark1000, colors.purple1000, colors.dark1000]}
        locations={[0, 1, 0.1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 3, y: 2.1 }}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </RNNavigationContainer>
  );
};
