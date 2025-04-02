import React, { useMemo } from "react";
import { Image, Pressable, View } from "react-native";
import { ChipProps } from "../../../types";
import { GradientContainer, LoadingSpinner, Text } from "../../ui";
import { getChipTexts, httpImage } from "../../../helpers";
import { styles } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../../../theme";

/**
 * `Chip` component displays a status indicator with a title, subtitle, and optional image.
 *
 * @param data - Contains image URL if available.
 * @param loading - Indicates if the process is in progress.
 * @param error - Indicates if an error occurred.
 * @param onPress - Optional function to handle press events.
 *
 * @returns A styled `Pressable` component displaying different states based on `loading`, `error`, or `data`.
 */
export const Chip = ({
  data,
  loading,
  error,
  onPress,
}: ChipProps): JSX.Element => {
  // Determine the current status based on props
  const status = loading
    ? "loading"
    : error
    ? "error"
    : data
    ? "success"
    : "error";

  // Retrieve title and subtitle based on the status
  const { title, subtitle } = useMemo(() => getChipTexts(status), [status]);

  return (
    <Pressable
      onPress={typeof onPress === "function" ? onPress : undefined}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.statusContainer}>
          {/* Display loading spinner if in loading state */}
          {loading && (
            <View style={styles.statusLoading}>
              <LoadingSpinner />
            </View>
          )}
          {/* Display error icon if in error state */}
          {error && (
            <View style={styles.statusError}>
              <MaterialIcons name="error" size={32} color={colors.white} />
            </View>
          )}
          {/* Display image if data is available and status is success */}
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
          {/* If success, wrap content in GradientContainer */}
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
