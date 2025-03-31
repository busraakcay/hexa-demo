import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from ".";

export interface StackScreenProps<T extends keyof RootStackParamList> {
  name: T;
  component: React.FC;
  options?: NativeStackNavigationOptions;
}
