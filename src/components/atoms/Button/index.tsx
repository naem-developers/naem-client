import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import Text from '@components/atoms/Text';
import { THEME } from '@/theme';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  priority?: 'primary' | 'secondary';
  btnSize?: 'large' | 'small';
  disabled?: boolean;
}

const Button = ({
  text,
  priority = 'primary',
  btnSize = 'large',
  disabled = false,
  style,
  ...props
}: ButtonProps) => {
  const textColorMapper = {
    primary: 'white',
    secondary: 'regText',
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`${disabled ? 'disabled' : priority}Container`],
        styles[`${btnSize}Container`],
        style,
      ]}
      disabled={disabled}
      accessible
      accessibilityLabel={text}
      {...props}
    >
      <Text
        sizeStyle="f18"
        weightStyle="semiBold"
        colorStyle={disabled ? 'lightText' : textColorMapper[priority]}
        style={styles.lh_undefined}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryContainer: {
    backgroundColor: THEME.MAIN,
  },
  secondaryContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#c4c4c4',
  },
  disabledContainer: {
    backgroundColor: THEME.LIGHT_GRAY,
  },
  largeContainer: {
    alignSelf: 'stretch',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
  },
  smallContainer: {
    paddingTop: 11,
    paddingBottom: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  lh_undefined: {
    lineHeight: undefined,
  },
});
