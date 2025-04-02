import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Image, ScrollView, View } from "react-native";
import { InputScreenProps } from "../../types";
import { images } from "../../utils";
import { Button, Chip, LogoStyle, Text, TextInput } from "../../components";
import { appStyles } from "../../theme";
import { styles } from "./styles";
import { useGeneratePrompt, useGetDocs } from "../../hooks";

export const InputScreen = ({ navigation }: InputScreenProps): JSX.Element => {
  // States to handle prompt text, selected style, and chip visibility
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [chipVisible, setChipVisible] = useState(false);

  // Custom hooks for fetching documents and generating the prompt
  const { loading, error, data, getDocsFromFirestore } = useGetDocs();
  const {
    loading: logoLoading,
    error: logoError,
    data: logoData,
    generatePrompt,
  } = useGeneratePrompt();

  // Fetching logo styles from Firestore once the component mounts
  useEffect(() => {
    getDocsFromFirestore("logoStyles");
  }, []);

  // Animation values for chip component visibility
  const translateY = useRef(new Animated.Value(-20)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  // Handling animation when chip becomes visible
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

  // Handles the press action when generating a prompt
  const handleOnPress = useCallback(() => {
    setChipVisible(true); // Show the chip
    generatePrompt(prompt, selectedStyle); // Generate the prompt based on the input
    if (!logoData) {
      setPrompt(""); // Clear prompt if no data is available
      setSelectedStyle(""); // Reset selected style
    }
  }, [prompt, selectedStyle]);

  // Navigation handler for moving to the OutputScreen
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
          {/* Conditionally rendering the chip component with animation */}
          {chipVisible && (
            <Animated.View style={{ transform: [{ translateY }], opacity }}>
              <Chip
                data={logoData} // Pass data for chip display
                loading={logoLoading} // Show loading spinner if necessary
                error={logoError} // Show error icon if needed
                onPress={logoData ? handleNavigation : handleOnPress} // Handle press action
              />
            </Animated.View>
          )}

          {/* Input prompt section */}
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

        {/* Logo Styles selection, only visible when data is loaded */}
        {!loading && !error && (
          <View style={styles.logoStyleContainer}>
            <Text title text="Logo Styles" />
            <ScrollView horizontal>
              {/* Default 'No Style' option */}
              <LogoStyle
                title=""
                isSelected={selectedStyle === ""}
                setSelectedStyle={setSelectedStyle}
              />
              {/* Iterating through available logo styles */}
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

        {/* Create button */}
        <View style={styles.buttonContainer}>
          <Button
            iconName={images.stars} // Button icon
            onPress={handleOnPress} // Trigger prompt generation on press
            buttonTitle="Create"
          />
        </View>
      </ScrollView>
    </View>
  );
};
