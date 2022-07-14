import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { STANDARD_DEVICE_HEIGHT } from '../../../constants';

interface TextProps extends RNTextProps {
  style?: TextStyle;
}

const Text = ({ children, style, ...props }: React.PropsWithChildren<TextProps>) => {
  return (
    <RNText
      style={[style, { fontSize: RFValue(style?.fontSize, STANDARD_DEVICE_HEIGHT) }]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
