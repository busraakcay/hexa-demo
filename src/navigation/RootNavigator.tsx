import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { appScreens, stackScreenOptions } from "../utils"; // Importing screen configuration and navigation options

// Create a Stack navigator using React Navigation's native stack
const Stack = createNativeStackNavigator();

/**
 * RootNavigator component
 * This is the main navigator that handles screen transitions and navigation.
 * It takes the screens and their options from the 'appScreens' array and renders them.
 *
 * The 'stackScreenOptions' are applied globally to the stack navigator.
 */
export const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator id={undefined} screenOptions={stackScreenOptions}>
      {/* Loop through the 'appScreens' array and create a screen for each */}
      {appScreens.map(({ name, component, options }) => (
        <Stack.Screen
          key={name} // The key is set as the screen name to ensure uniqueness
          name={name} // Screen name, used for navigation
          component={component} // The component rendered for this screen
          options={options} // Any specific options for this screen
        />
      ))}
    </Stack.Navigator>
  );
};
