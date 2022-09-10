import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

interface TitleProps extends ViewProps {
  step: number;
  text: string;
}

const Title = ({ step, text, style, ...props }: TitleProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.numberContainer}>
        <Text sizeStyle="f19" weightStyle="semiBold" colorStyle="white" allowFontScaling={false}>
          {step}
        </Text>
      </View>
      <Text sizeStyle="f19" weightStyle="semiBold" colorStyle="strongText">
        {' '}
        {text}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  numberContainer: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: THEME.STRONG_TEXT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
