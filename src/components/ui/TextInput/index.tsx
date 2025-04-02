import React, { useState } from "react";
import { View, TextInput as RNTextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../theme";
import { Text } from "../Text";
import { TextInputProps } from "../../../types";

/**
 * `TextInput` is a custom input field component that supports multiline input and a character count.
 * It also highlights the border when the input is focused to provide visual feedback.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.text - The current text value of the input field.
 * @param {function} props.setText - The function to update the text value when the user types.
 *
 * @returns {JSX.Element} The rendered `TextInput` component with custom styles and features.
 */
export const TextInput = ({ text, setText }: TextInputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const maxLength = 500;

  return (
    <View
      style={[
        styles.inputContainer,
        { borderColor: isFocused ? "#fff" : "transparent" }, // Highlight border on focus
      ]}
    >
      <View style={styles.innerInputContainer}>
        <RNTextInput
          style={styles.input}
          maxLength={maxLength}
          multiline
          placeholderTextColor={colors.dark500}
          placeholder="A blue lion logo reading ‘HEXA’ in bold letters"
          value={text}
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={setText} // Updates the text when user types
          onFocus={() => setIsFocused(true)} // Sets focus state to true when input is focused
          onBlur={() => setIsFocused(false)} // Resets focus state when input is blurred
        />
        <View>
          <Text extraSmall thin text={`${text.length}/${maxLength}`} />
          {/* Shows character count */}
        </View>
      </View>
    </View>
  );
};
