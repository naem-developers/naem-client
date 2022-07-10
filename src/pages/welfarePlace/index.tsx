import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface WelfarePlacePageProps {}

const WelfarePlacePage = (props: WelfarePlacePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>WelfarePlacePage</Text>
    </SafeAreaView>
  );
};

export default WelfarePlacePage;

const styles = StyleSheet.create({
  container: {},
});
