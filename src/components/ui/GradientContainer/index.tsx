import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { colors } from "../../../theme";
import { GradientContainerProps } from "../../../types";

export const GradientContainer = ({
  children,
  flex,
}: GradientContainerProps): JSX.Element => {
  return (
    <LinearGradient
      colors={[colors.darkBlue, colors.purple1000]}
      locations={[0.01, 0.85]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={flex && { height: "100%" }}
    >
      {children}
    </LinearGradient>
  );
};
