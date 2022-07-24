import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { STANDARD_DEVICE_HEIGHT } from '../../../constants';
import { sizeStyles } from './fontStyles';

interface TextProps extends RNTextProps {
  sizeStyle?: keyof typeof sizeStyles;
}

const Text = ({
  children,
  sizeStyle = 'f16',
  style,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  return (
    <RNText
      style={[style, { fontSize: RFValue(sizeStyles[sizeStyle].fontSize, STANDARD_DEVICE_HEIGHT) }]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
