import { InputScreen, OutputScreen } from "../screens";
import { StackScreenProps } from "../types";

export const appScreens: StackScreenProps[] = [
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
