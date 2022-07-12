import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TextProps extends RNTextProps {
  style?: TextStyle;
}

const Text = ({ children, style, ...props }: React.PropsWithChildren<TextProps>) => {
  return (
    <RNText style={[style, { fontSize: RFValue(style?.fontSize) }]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
