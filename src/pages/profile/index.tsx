import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface MyPageProps {}

function MyPage(props: MyPageProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPage</Text>
    </SafeAreaView>
  );
}

export default MyPage;

const styles = StyleSheet.create({
  container: {},
});
