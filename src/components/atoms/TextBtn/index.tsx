import * as React from 'react';
import { View, StyleSheet, Pressable, PressableProps, TextStyle } from 'react-native';
import Text, { SizeStyle, WeightStyle } from '@/components/atoms/Text';

interface TextBtnProps extends PressableProps {
  text: string;
  textStyle?: TextStyle;
  sizeStyle?: SizeStyle;
  weightStyle?: WeightStyle;
}

const TextBtn = ({ text, textStyle = {}, sizeStyle, weightStyle, ...props }: TextBtnProps) => {
  return (
    <Pressable style={styles.container} hitSlop={5} {...props}>
      <Text sizeStyle={sizeStyle} weightStyle={weightStyle} style={textStyle}>
        {text}
      </Text>
    </Pressable>
  );
};

export default TextBtn;

const styles = StyleSheet.create({
  container: {},
});
