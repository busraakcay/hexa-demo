import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { InputScreenProps } from "../../types";

export const InputScreen = (props: InputScreenProps): JSX.Element => {
  return (
    <View>
      <Pressable onPress={() => props.navigation.navigate("OutputScreen")}>
        <Text style={{ color: "white" }}>Output</Text>
      </Pressable>
    </View>
  );
};
