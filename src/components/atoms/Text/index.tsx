import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { STANDARD_DEVICE_HEIGHT } from '../../../constants';
import { colorStyles, sizeStyles, weightStyles } from './fontStyles';

export type SizeStyle = keyof typeof sizeStyles;
export type WeightStyle = keyof typeof weightStyles;
export type ColorStyle = keyof typeof colorStyles;

interface TextProps extends RNTextProps {
  sizeStyle?: SizeStyle;
  weightStyle?: WeightStyle;
  colorStyle?: ColorStyle;
}

const Text = ({
  children,
  sizeStyle = 'f16',
  weightStyle = 'regular',
  colorStyle = 'regText',
  style,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  return (
    <RNText
      style={[
        style,
        sizeStyles[sizeStyle],
        weightStyles[weightStyle],
        colorStyles[colorStyle],
        { fontSize: RFValue(sizeStyles[sizeStyle].fontSize, STANDARD_DEVICE_HEIGHT) },
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
