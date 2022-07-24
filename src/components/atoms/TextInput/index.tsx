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
      <RNTextInput style={[style, styles.container]} placeholderTextColor="#aeaeae" {...props} />
      {!!validationMsg && (
        <Text sizeStyle="f13" weightStyle="semiBold" style={styles.validation}>
          {validationMsg}
        </Text>
      )}
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
    fontSize: 17,
  },
  validation: {
    marginTop: 9,
    color: THEME.POINT,
    alignSelf: 'flex-start',
  },
});
