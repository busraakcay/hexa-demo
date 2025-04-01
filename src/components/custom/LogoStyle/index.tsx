import * as React from "react";
import { Image, Pressable, View } from "react-native";
import { Text } from "../../ui";
import { httpImage } from "../../../helpers";
import { LogoStyleProps } from "../../../types";
import { styles } from "./styles";
import { images } from "../../../utils";

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
        <Image
          style={uri && [styles.image, isSelected && styles.selected]}
          source={uri ? httpImage(uri) : images.slash}
        />
      </View>
      <Text
        thin={!isSelected}
        bold={isSelected}
        small
        text={title === "" ? "No Style" : title}
      />
    </Pressable>
  );
};
