import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../theme";
import { styles } from "./styles";

/**
 * `LoadingSpinner` is a functional component that displays a rotating loading spinner.
 * It uses the `Animated` API to create a continuous rotation animation for the spinner icon.
 * The rotation is controlled using `rotateAnim`, an `Animated.Value` that changes over time.
 * The `AntDesign` icon with the name `"loading1"` is used as the spinner.
 *
 * @param {number} size - The size of the spinner icon. Defaults to 24.
 *
 * @returns {JSX.Element} A rotating loading spinner wrapped in an animated view.
 */
export const LoadingSpinner = ({ size = 24 }): JSX.Element => {
  // Creating an animated value for rotation
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Defining the spin animation, it loops continuously
    const spinAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000, // Duration of one complete rotation
        easing: Easing.linear, // Linear easing for continuous rotation
        useNativeDriver: true, // Use native driver for performance
      })
    );

    spinAnimation.start(); // Start the animation
    return () => spinAnimation.stop(); // Stop the animation on unmount
  }, []);

  // Interpolating the animated value to rotate the icon
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Rotate from 0 to 360 degrees
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <AntDesign name="loading1" size={size} color={colors.white} />
      </Animated.View>
    </View>
  );
};
