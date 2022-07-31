import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface WithdrawlPageProps {}

const WithdrawlPage = (props: WithdrawlPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="회원 탈퇴" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>WithdrawlPage</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WithdrawlPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainer: { paddingHorizontal: H_PADDING },
});
