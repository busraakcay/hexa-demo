import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";

export type RootStackParamList = {
  InputScreen: undefined;
  OutputScreen: undefined;
};

export interface StackScreenProps {
  name: keyof RootStackParamList;
  component: React.FC;
  options?: NativeStackNavigationOptions;
}

export type InputScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "InputScreen"
>;
export type OutputScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "OutputScreen"
>;
