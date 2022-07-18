import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface PostPageProps {}

const PostPage = (props: PostPageProps) => {
  return (
    <View style={styles.container}>
      <Text>PostPage</Text>
    </View>
  );
};

export default PostPage;

const styles = StyleSheet.create({
  container: {},
});
