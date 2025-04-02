import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  image: {
    minWidth: windowWidth * 0.93,
    minHeight: windowWidth * 0.93,
    resizeMode: "contain",
    borderRadius: 16,
    alignSelf: "center",
    marginVertical: 16,
  },
  promptContainer: {
    backgroundColor: colors.dark2000,
    borderRadius: 16,
  },
  promptInnerContainer: {
    padding: 12,
    backgroundColor: colors.purple1000RGBA,
  },
  styleContainer: {
    backgroundColor: colors.whiteRGBA,
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  promptText: {
    marginVertical: 10,
  },
  styleText: {
    fontSize: 12,
    color: colors.white100,
  },
});
