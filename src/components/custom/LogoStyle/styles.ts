import { StyleSheet } from "react-native";
import { colors } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 12,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    borderRadius: 20,
    marginBottom: 6,
    marginTop: 12,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    backgroundColor: colors.darkBlue1000,
    borderRadius: 20,
    marginBottom: 6,
    marginTop: 12,
  },
  selected: {
    borderWidth: 2,
    borderColor: colors.white,
  },
});
