import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';

interface SwitchItemProps {
  text: string;
  value?: boolean;
  onValueChange?: () => void;
}

const SwitchItem = ({ text, value, onValueChange }: SwitchItemProps) => {
  return (
    <View style={styles.container}>
      <Text sizeStyle="f17" weightStyle="medium" style={styles.text}>
        {text}
      </Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

export default SwitchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    color: THEME.STRONG_TEXT,
  },
});
