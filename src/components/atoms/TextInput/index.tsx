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
  buttonText?: string;
  containerStyle?: ViewStyle;
  inputContatinerStyle?: ViewStyle;
  buttonTextStyle?: ViewStyle;
  buttonOnPress?: () => void;
}

const TextInput = ({
  Icon,
  buttonText,
  style,
  containerStyle,
  inputContatinerStyle,
  buttonTextStyle,
  validationMsg,
  buttonOnPress,
  ...props
}: TextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputContainer, inputContatinerStyle]}>
        <RNTextInput style={[styles.input, style]} placeholderTextColor="#aeaeae" {...props} />
        {(Icon !== undefined || buttonText !== undefined) && (
          <TouchableOpacity style={styles.button} onPress={buttonOnPress}>
            {Icon ? (
              <Icon />
            ) : (
              <Text
                sizeStyle="f17"
                weightStyle="semiBold"
                colorStyle="main"
                style={buttonTextStyle}
              >
                {buttonText}
              </Text>
            )}
          </TouchableOpacity>
        )}
      </View>
      {!!validationMsg && (
        <Text sizeStyle="f13" weightStyle="semiBold" style={styles.validation}>
          {validationMsg}
        </Text>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  inputContainer: {
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
    justifyContent: 'center',
  },
});
