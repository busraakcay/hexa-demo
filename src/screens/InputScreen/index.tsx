import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Image, ScrollView, View } from "react-native";
import { InputScreenProps } from "../../types";
import { images } from "../../utils";
import { Button, Chip, LogoStyle, Text, TextInput } from "../../components";
import { appStyles } from "../../theme";
import { styles } from "./styles";
import { useGeneratePrompt, useGetDocs } from "../../hooks";

export const InputScreen = ({ navigation }: InputScreenProps): JSX.Element => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [chipVisible, setChipVisible] = useState(false);

  const { loading, error, data, getDocsFromFirestore } = useGetDocs();
  const {
    loading: logoLoading,
    error: logoError,
    data: logoData,
    generatePrompt,
  } = useGeneratePrompt();

  useEffect(() => {
    getDocsFromFirestore("logoStyles");
  }, []);

  const translateY = useRef(new Animated.Value(-20)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (chipVisible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [chipVisible]);

  const handleOnPress = useCallback(() => {
    setChipVisible(true);
    generatePrompt(prompt, selectedStyle);
    if (!logoData) {
      setPrompt("");
      setSelectedStyle("");
    }
  }, [prompt, selectedStyle]);

  const handleNavigation = () => {
    navigation.navigate("OutputScreen", { data: logoData });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        style={appStyles.scrollViewContainer}
      >
        <View style={styles.innerContainer}>
          {chipVisible && (
            <Animated.View style={{ transform: [{ translateY }], opacity }}>
              <Chip
                data={logoData}
                loading={logoLoading}
                error={logoError}
                onPress={logoData ? handleNavigation : handleOnPress}
              />
            </Animated.View>
          )}
          <View style={appStyles.flexRowSpaceBetween}>
            <Text title text="Enter Your Prompt" />
            <View style={appStyles.flexRow}>
              <Image style={appStyles.iconMargin} source={images.dice} />
              <Text small text="Surprise me" />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput text={prompt} setText={setPrompt} />
          </View>
        </View>

        {!loading && !error && (
          <View style={styles.logoStyleContainer}>
            <Text title text="Logo Styles" />
            <ScrollView horizontal>
              <LogoStyle
                title=""
                isSelected={selectedStyle === ""}
                setSelectedStyle={setSelectedStyle}
              />
              {data.map((item) => (
                <LogoStyle
                  key={item.id}
                  title={item.title}
                  uri={item.url}
                  isSelected={selectedStyle === item.title}
                  setSelectedStyle={setSelectedStyle}
                />
              ))}
            </ScrollView>
          </View>
        )}

        <View style={styles.buttonContainer}>
          <Button
            iconName={images.stars}
            onPress={handleOnPress}
            buttonTitle="Create"
          />
        </View>
      </ScrollView>
    </View>
  );
};
