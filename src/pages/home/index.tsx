import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomePage</Text>
    </SafeAreaView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {},
});
