import * as React from "react";
import { NavigationContainer, RootNavigator } from "./src/navigation";

/**
 * App component
 * This is the entry point of the application.
 * It wraps the entire navigation structure inside a NavigationContainer
 * and renders the RootNavigator which holds the screens of the app.
 *
 * The NavigationContainer is responsible for managing navigation state,
 * and the RootNavigator contains all the app's screens and navigation logic.
 */
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* RootNavigator contains all the screens and navigation stack */}
      <RootNavigator />
    </NavigationContainer>
  );
}
