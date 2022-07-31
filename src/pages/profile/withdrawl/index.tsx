import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WithdrawlPageProps {}

const WithdrawlPage = (props: WithdrawlPageProps) => {
  return (
    <View style={styles.container}>
      <Text>WithdrawlPage</Text>
    </View>
  );
};

export default WithdrawlPage;

const styles = StyleSheet.create({
  container: {},
});
