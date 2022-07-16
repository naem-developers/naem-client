import { THEME } from '@/theme';
import * as React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import Text from '@/components/atoms/Text';

interface TextInputProps extends RNTextInputProps {
  validationMsg?: string;
}

const TextInput = ({ style, validationMsg, ...props }: TextInputProps) => {
  return (
    <>
      <RNTextInput style={[style, styles.container]} {...props} />
      {!!validationMsg && <Text style={styles.validation}>{validationMsg}</Text>}
    </>
  );
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
  validation: {
    marginTop: 9,
    color: THEME.POINT,
    fontSize: 13,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
});
