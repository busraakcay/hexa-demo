import * as React from "react";
import { NavigationContainer, RootNavigator } from "./src/navigation";

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
