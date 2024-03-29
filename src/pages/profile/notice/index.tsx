import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NoticePageProps {}

const NoticePage = (props: NoticePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="공지사항" />
    </SafeAreaView>
  );
};

export default NoticePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
});
