import React, { useMemo } from "react";
import { Image, Pressable, View } from "react-native";
import { ChipProps } from "../../../types";
import { GradientContainer, LoadingSpinner, Text } from "../../ui";
import { getChipTexts, httpImage } from "../../../helpers";
import { styles } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../../../theme";

export const Chip = ({
  data,
  loading,
  error,
  onPress,
}: ChipProps): JSX.Element => {
  const status = loading
    ? "loading"
    : error
    ? "error"
    : data
    ? "success"
    : "error";

  const { title, subtitle } = useMemo(() => getChipTexts(status), [status]);

  return (
    <Pressable
      onPress={typeof onPress === "function" ? onPress : undefined}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.statusContainer}>
          {loading && (
            <View style={styles.statusLoading}>
              <LoadingSpinner />
            </View>
          )}
          {error && (
            <View style={styles.statusError}>
              <MaterialIcons name="error" size={32} color={colors.white} />
            </View>
          )}
          {status === "success" && data?.url && (
            <Image source={httpImage(data.url)} style={styles.image} />
          )}
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View
          style={[
            loading && styles.loadingContent,
            error && styles.errorContent,
          ]}
        >
          {status === "success" ? (
            <GradientContainer flex>
              <View style={styles.textContentContainer}>
                <Text bold text={title} />
                <Text small subtitle text={subtitle} />
              </View>
            </GradientContainer>
          ) : (
            <View style={styles.textContentContainer}>
              <Text bold text={title} />
              <Text small subtitle text={subtitle} />
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};
