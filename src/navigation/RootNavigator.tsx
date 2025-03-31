import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { appScreens, stackScreenOptions } from "../utils";

const Stack = createNativeStackNavigator();
export const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator id={undefined} screenOptions={stackScreenOptions}>
      {appScreens.map(({ name, component, options }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
};
