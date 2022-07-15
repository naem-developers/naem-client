import Text from '@/components/atoms/Text';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
});
