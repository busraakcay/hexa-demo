import { InputScreen, OutputScreen } from "../screens";
import { RootStackParamList, StackScreenProps } from "../types";

export const appScreens: Array<StackScreenProps<keyof RootStackParamList>> = [
  {
    name: "InputScreen",
    component: InputScreen,
    options: {
      title: "AI Logo",
    },
  },
  {
    name: "OutputScreen",
    component: OutputScreen,
    options: {
      header() {
        return null;
      },
    },
  },
];
