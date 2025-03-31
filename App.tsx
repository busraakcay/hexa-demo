import * as React from "react";
import { View } from "react-native";
import { app } from "./src/services";

export default function App(): JSX.Element {
  console.log("Firebase App Initialized:", app.name);

  return <View></View>;
}
