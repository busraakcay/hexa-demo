import React, { useCallback } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, View } from "react-native";
import { OutputScreenProps } from "../../types";
import { styles } from "./styles";
import { appStyles, colors } from "../../theme";
import { Text } from "../../components";
import AntDesign from "@expo/vector-icons/AntDesign";
import { httpImage } from "../../helpers";
import { images } from "../../utils";

export const OutputScreen = (props: OutputScreenProps): JSX.Element => {
  // Retrieve the 'data' parameter from the route props
  const { data } = props.route.params;

  // Function to handle the copy action
  const handleOnPressCopy = useCallback(() => {
    // Implement the copy logic here if needed
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* ScrollView to allow for vertical scrolling if content exceeds screen height */}
      <ScrollView
        contentContainerStyle={styles.container}
        style={appStyles.scrollViewContainer}
      >
        {/* Header with the title and close button */}
        <View style={appStyles.flexRowSpaceBetween}>
          <Text title text="Your Design" />
          <AntDesign
            onPress={() => props.navigation.goBack()} // Navigate back when close button is pressed
            name="close"
            size={24}
            color={colors.white}
          />
        </View>

        {/* Display the generated image */}
        <Image style={styles.image} source={httpImage(data.url)} />

        {/* Section to display prompt and style info */}
        <View style={styles.promptContainer}>
          <View style={styles.promptInnerContainer}>
            {/* Prompt section with copy functionality */}
            <View style={appStyles.flexRowSpaceBetween}>
              <Text bold text="Prompt" />
              <View style={appStyles.flexRow}>
                <Image source={images.copy} style={appStyles.iconMargin} />
                <Pressable onPress={handleOnPressCopy}>
                  <Text extraSmall subtitle text="Copy" />
                </Pressable>
              </View>
            </View>

            {/* Display the prompt text or a default message */}
            <Text
              extraStyles={styles.promptText}
              text={data.prompt ? data.prompt : "No prompt available"}
            />

            {/* Style section to show the selected style or a default message */}
            <View style={styles.styleContainer}>
              <Text
                text={data.style ? data.style : "No Style"}
                extraStyles={styles.styleText}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
