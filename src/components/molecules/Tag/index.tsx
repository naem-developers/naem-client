import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface TagProps extends TouchableOpacityProps {
  text: string;
  selected?: boolean;
  isReverseColor?: boolean;
}

const Tag = ({
  text,
  selected = false,
  disabled = false,
  style,
  isReverseColor,
  ...props
}: TagProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected && !disabled ? styles.selectedContainer : styles.unSelectedContainer,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      <Text
        style={{
          ...styles.text,
          ...(selected && !disabled
            ? styles.selectedText
            : !isReverseColor
            ? styles.unSelectedText
            : styles.unSelectedReverseText),
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 10,
  },
  unSelectedContainer: {
    backgroundColor: THEME.LIGHT_GRAY,
  },
  selectedContainer: {
    backgroundColor: THEME.MAIN,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  unSelectedText: {
    color: THEME.REG_TEXT,
  },
  unSelectedReverseText: {
    color: THEME.MAIN,
  },
  selectedText: {
    color: '#ffffff',
  },
});
