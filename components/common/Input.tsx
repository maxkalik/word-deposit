import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

interface InputProps {
  onChangeText: (_: any) => void;
  onClearBtnPress?: () => void;
  value: string;
  placeholder: string;
  style?: object;
  styleInputField?: object;
  autoFocus?: boolean;
}

const ClearButton: React.FC<{ onClearBtnPress: (() => void) | undefined }> = ({
  onClearBtnPress
}): JSX.Element => (
  <TouchableOpacity style={styles.clearButton} onPress={onClearBtnPress}>
    <Text style={styles.clearButtonIcon}>×</Text>
  </TouchableOpacity>
);

const Input: React.FC<InputProps> = ({
  onChangeText,
  placeholder,
  value,
  onClearBtnPress,
  styleInputField,
  style,
  autoFocus
}): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <View style={[styles.container, focus && styles.focused, style]}>
      <TextInput
        style={[styles.inputField, styleInputField]}
        autoFocus={autoFocus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
      />
      {value.length > 0 && <ClearButton onClearBtnPress={onClearBtnPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  focused: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  inputField: {
    flex: 1,
    fontSize: 18,
    color: 'black'
  },
  clearButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    width: 30,
    justifyContent: 'center'
    // borderWidth: 1,
    // borderColor: 'black'
  },
  clearButtonIcon: {
    fontSize: 20
  }
});

export default Input;
