import React from "react";
import {
  createNavigationContainerRef,
  NavigationContainer as RNNavigationContainer,
} from "@react-navigation/native";
import { StatusBar, ImageBackground, View } from "react-native";
import { colors } from "../../theme";
import { styles } from "./styles";
import { images } from "../../utils";

export const navigationRef = createNavigationContainerRef();

export const NavigationContainer = ({ children }): JSX.Element => {
  return (
    <RNNavigationContainer ref={navigationRef}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark1000} />
      <View style={styles.container}>
        <ImageBackground source={images.backGradient} style={styles.bgImage}>
          {children}
        </ImageBackground>
      </View>
    </RNNavigationContainer>
  );
};
