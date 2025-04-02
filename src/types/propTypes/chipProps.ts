export type GeneratedDataElements = {
  url: string;
  prompt: string;
  style: string;
};

export interface ChipProps {
  data: GeneratedDataElements;
  loading: boolean;
  error: boolean;
  onPress: () => void;
}
