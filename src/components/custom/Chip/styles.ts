import { StyleSheet } from "react-native";
import { colors } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 16,
    height: 70,
    marginBottom: 22,
    overflow: "hidden",
  },
  innerContainer: {
    width: 70,
    height: 70,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.dark2000,
  },
  textContentContainer: {
    margin: 12,
  },
  statusContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  statusLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark100,
  },
  statusError: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red1000RGBA,
  },
  loadingContent: {
    flex: 1,
    backgroundColor: colors.purple1000RGBA,
  },
  errorContent: {
    flex: 1,
    backgroundColor: colors.red1000,
  },
});
