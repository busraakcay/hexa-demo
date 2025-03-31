import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

export interface ButtonProps {
  buttonTitle: string;
  iconName?: ImageSourcePropType;
  onPress: () => void;
  extraStyles?: StyleProp<ImageStyle>;
}
