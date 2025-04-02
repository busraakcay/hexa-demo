import React from "react";
import {
  createNavigationContainerRef,
  NavigationContainer as RNNavigationContainer,
} from "@react-navigation/native";
import { StatusBar, ImageBackground, View } from "react-native";
import { colors } from "../../theme";
import { styles } from "./styles";
import { images } from "../../utils";

// Create a navigation reference that can be used to control navigation from outside components
export const navigationRef = createNavigationContainerRef();

/**
 * NavigationContainer component
 * This component wraps the entire navigation system of the app.
 * It includes a status bar with light content, a background image, and renders the child components.
 *
 * It is the outermost component that holds the navigation logic of the app.
 */
export const NavigationContainer = ({ children }): JSX.Element => {
  return (
    <RNNavigationContainer ref={navigationRef}>
      {/* Set the status bar style and background color */}
      <StatusBar barStyle="light-content" backgroundColor={colors.dark1000} />
      <View style={styles.container}>
        {/* Display a background image with gradient */}
        <ImageBackground source={images.backGradient} style={styles.bgImage}>
          {/* Render child components inside the background */}
          {children}
        </ImageBackground>
      </View>
    </RNNavigationContainer>
  );
};
