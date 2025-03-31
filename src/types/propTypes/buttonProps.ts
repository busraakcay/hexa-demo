import { ImageSourcePropType } from "react-native";

export interface ButtonProps {
  buttonTitle: string;
  iconName?: ImageSourcePropType;
  onPress: () => void;
}
