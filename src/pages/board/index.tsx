import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface BoardPageProps {}

function BoardPage(props: BoardPageProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BoardPage</Text>
    </SafeAreaView>
  );
}

export default BoardPage;

const styles = StyleSheet.create({
  container: {},
});
