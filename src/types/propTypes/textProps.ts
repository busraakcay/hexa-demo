import { StyleProp, TextStyle } from "react-native";

export interface TextOptionProps {
  bold?: boolean;
  small?: boolean;
  extraSmall?: boolean;
  title?: boolean;
  subtitle?: boolean;
  thin?: boolean;
}

export interface TextProps extends TextOptionProps {
  text: string;
  extraStyles?: StyleProp<TextStyle>;
}
