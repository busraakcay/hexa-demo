import { Dispatch, SetStateAction } from "react";

export interface TextInputProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}
