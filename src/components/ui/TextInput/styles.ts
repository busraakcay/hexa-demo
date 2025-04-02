import { StyleSheet } from "react-native";
import { colors } from "../../../theme";

export const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 16,
    borderWidth: 1,
    width: "100%",
    backgroundColor: colors.dark2000,
    overflow: "hidden",
  },
  innerInputContainer: {
    borderRadius: 16,
    padding: 12,
    width: "100%",
    backgroundColor: colors.purple1000RGBA,
  },
  input: {
    fontSize: 16,
    color: colors.white,
    textAlignVertical: "top",
    height: 135,
  },
});
