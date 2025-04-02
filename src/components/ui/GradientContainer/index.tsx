import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { colors } from "../../../theme";
import { GradientContainerProps } from "../../../types";

/**
 * `GradientContainer` is a wrapper component that applies a linear gradient background to its children.
 * It takes in an optional `flex` prop to control the container's height.
 * When `flex` is set to `true`, the container takes up the full height of its parent.
 *
 * @param {React.ReactNode} children - The child elements to be wrapped by the gradient.
 * @param {boolean} [flex=false] - A boolean to control if the container should take the full height.
 *
 * @returns {JSX.Element} A component with a linear gradient background and the provided children.
 */
export const GradientContainer = ({
  children,
  flex,
}: GradientContainerProps): JSX.Element => {
  return (
    <LinearGradient
      colors={[colors.darkBlue, colors.purple1000]} // Defines the gradient colors.
      locations={[0.01, 0.85]} // Specifies the starting and ending positions of the gradient.
      start={{ x: 0, y: 0 }} // Defines the starting point of the gradient (top-left corner).
      end={{ x: 1, y: 0 }} // Defines the ending point of the gradient (top-right corner).
      style={flex && { height: "100%" }} // If `flex` is true, set the height of the container to 100%.
    >
      {children}
      {/* Render any children passed to the component within the gradient container. */}
    </LinearGradient>
  );
};
