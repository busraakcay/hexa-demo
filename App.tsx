import * as React from "react";
import { View } from "react-native";
import { app } from "./src/services";
import { NavigationContainer, RootNavigator } from "./src/navigation";

export default function App(): JSX.Element {
  console.log("Firebase App Initialized:", app.name);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
