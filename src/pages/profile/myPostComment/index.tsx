import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MyPostCommentPageProps {}

const MyPostCommentPage = (props: MyPostCommentPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="내 게시글 / 댓글" />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <Text>MyPostCommentPage</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPostCommentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
  contentContainerStyle: {
    padding: H_PADDING,
  },
});
