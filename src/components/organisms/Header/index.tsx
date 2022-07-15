import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

interface HeaderProps {
  title?: string;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
}

const Header = ({ title, LeftComponent, RightComponent }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View>{LeftComponent}</View>
      <Text style={styles.title}>{title}</Text>
      <View>{RightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 19,
  },
  title: {
    fontSize: 18,
    color: THEME.STRONG_TEXT,
    fontWeight: '700',
  },
});
