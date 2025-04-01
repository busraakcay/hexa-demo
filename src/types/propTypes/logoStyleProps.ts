import { Dispatch, SetStateAction } from "react";

export interface LogoStyleProps {
  uri?: string | undefined | null;
  title: string;
  isSelected: boolean;
  setSelectedStyle: Dispatch<SetStateAction<string>>;
}
