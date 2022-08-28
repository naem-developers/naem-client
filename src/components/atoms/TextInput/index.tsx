import { THEME } from '@/theme';
import * as React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Text from '@/components/atoms/Text';
import { SvgProps } from 'react-native-svg';

interface TextInputProps extends RNTextInputProps {
  validationMsg?: string;
  Icon?: React.FC<SvgProps>;
  containerStyle?: ViewStyle;
  iconAction?: () => void;
}

const TextInput = ({
  Icon,
  style,
  containerStyle,
  validationMsg,
  iconAction,
  ...props
}: TextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RNTextInput style={[style, styles.input]} placeholderTextColor="#aeaeae" {...props} />
      {!!validationMsg && (
        <Text sizeStyle="f13" weightStyle="semiBold" style={styles.validation}>
          {validationMsg}
        </Text>
      )}
      {Icon != undefined && (
        <TouchableOpacity style={styles.button} onPress={iconAction}>
          <Icon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    borderColor: THEME.LIGHT_BOX,
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    padding: 14,
    width: '100%',
    fontSize: 17,
  },
  validation: {
    marginTop: 9,
    color: THEME.POINT,
    alignSelf: 'flex-start',
  },
  button: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
});
