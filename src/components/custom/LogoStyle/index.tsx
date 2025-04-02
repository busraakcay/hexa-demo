import * as React from "react";
import { Image, Pressable, View } from "react-native";
import { Text } from "../../ui";
import { httpImage } from "../../../helpers";
import { LogoStyleProps } from "../../../types";
import { styles } from "./styles";
import { images } from "../../../utils";

/**
 * `LogoStyle` component represents a selectable logo style option.
 *
 * @param uri - The image URI for the logo style.
 * @param title - The title of the style.
 * @param isSelected - Boolean indicating if the style is selected.
 * @param setSelectedStyle - Function to set the selected style.
 *
 * @returns A `Pressable` component allowing users to select a logo style.
 */
export const LogoStyle = ({
  uri,
  title,
  isSelected,
  setSelectedStyle,
}: LogoStyleProps): JSX.Element => {
  return (
    <Pressable
      onPress={() => {
        setSelectedStyle(title);
      }}
      style={styles.container}
    >
      <View
        style={!uri && [styles.iconContainer, isSelected && styles.selected]}
      >
        {/* Display either the provided image or a default placeholder */}
        <Image
          style={uri && [styles.image, isSelected && styles.selected]}
          source={uri ? httpImage(uri) : images.slash}
        />
      </View>
      {/* Display the title with different font styles based on selection */}
      <Text
        thin={!isSelected}
        bold={isSelected}
        small
        text={title === "" ? "No Style" : title}
      />
    </Pressable>
  );
};
