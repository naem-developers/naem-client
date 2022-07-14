import * as React from 'react';
import { View, StyleSheet, Pressable, PressableProps, TextStyle } from 'react-native';
import Text from '@/components/atoms/Text';

interface TextBtnProps extends PressableProps {
  text: string;
  textStyle?: TextStyle;
}

const TextBtn = ({ text, textStyle = {}, ...props }: TextBtnProps) => {
  return (
    <Pressable style={styles.container} hitSlop={5} {...props}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};

export default TextBtn;

const styles = StyleSheet.create({
  container: {},
});
