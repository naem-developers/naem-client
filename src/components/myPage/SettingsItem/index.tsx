import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

interface SettingsItemProps extends TouchableOpacityProps {
  text: string;
}

const SettingsItem = ({ text, style, ...props }: SettingsItemProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SettingsItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: THEME.BG,
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    color: THEME.STRONG_TEXT,
  },
});
