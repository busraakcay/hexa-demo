import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../theme";
import { styles } from "./styles";

export const LoadingSpinner = ({ size = 24 }): JSX.Element => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    spinAnimation.start();
    return () => spinAnimation.stop();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <AntDesign name="loading1" size={size} color={colors.white} />
      </Animated.View>
    </View>
  );
};
