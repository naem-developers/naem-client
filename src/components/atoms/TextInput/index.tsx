import { THEME } from '@/theme';
import * as React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

interface TextInputProps extends RNTextInputProps {}

const TextInput = ({ style, ...props }: TextInputProps) => {
  return <RNTextInput style={[style, styles.container]} {...props} />;
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    padding: 14,
    width: '100%',
    borderColor: THEME.LIGHT_BOX,
    borderWidth: 1.2,
    borderRadius: 10,
  },
});
