import React, { useState } from "react";
import { View, TextInput as RNTextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../theme";
import { Text } from "../Text";
import { TextInputProps } from "../../../types";

export const TextInput = ({ text, setText }: TextInputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const maxLength = 500;
  return (
    <View
      style={[
        styles.inputContainer,
        { borderColor: isFocused ? "#fff" : "transparent" },
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
          onChangeText={setText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View>
          <Text extraSmall thin text={`${text.length}/${maxLength}`} />
        </View>
      </View>
    </View>
  );
};
