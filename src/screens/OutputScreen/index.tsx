import * as React from "react";
import { View } from "react-native";
import { OutputScreenProps } from "../../types";

export const OutputScreen = (props: OutputScreenProps): JSX.Element => {
  const { data } = props.route.params;
  console.log(data);
  return <View></View>;
};
