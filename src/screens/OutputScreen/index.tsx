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
  const { data } = props.route.params;
  const handleOnPressCopy = useCallback(() => {}, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        style={appStyles.scrollViewContainer}
      >
        <View style={appStyles.flexRowSpaceBetween}>
          <Text title text="Your Design" />
          <AntDesign
            onPress={() => props.navigation.goBack()}
            name="close"
            size={24}
            color={colors.white}
          />
        </View>
        <Image style={styles.image} source={httpImage(data.url)} />

        <View style={styles.promptContainer}>
          <View style={styles.promptInnerContainer}>
            <View style={appStyles.flexRowSpaceBetween}>
              <Text bold text="Prompt" />
              <View style={appStyles.flexRow}>
                <Image source={images.copy} style={appStyles.iconMargin} />
                <Pressable onPress={handleOnPressCopy}>
                  <Text extraSmall subtitle text="Copy" />
                </Pressable>
              </View>
            </View>
            <Text
              extraStyles={styles.promptText}
              text={data.prompt ? data.prompt : "No prompt available"}
            />
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
