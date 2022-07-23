import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface NoticePageProps {}

const NoticePage = (props: NoticePageProps) => {
  return (
    <View style={styles.container}>
      <Text>NoticePage</Text>
    </View>
  );
};

export default NoticePage;

const styles = StyleSheet.create({
  container: {},
});
