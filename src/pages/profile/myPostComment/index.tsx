import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MyPostCommentPageProps {}

const MyPostCommentPage = (props: MyPostCommentPageProps) => {
  return (
    <View style={styles.container}>
      <Text>MyPostCommentPage</Text>
    </View>
  );
};

export default MyPostCommentPage;

const styles = StyleSheet.create({
  container: {},
});
