import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface EventPageProps {}

const InquiryPage = (props: EventPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="문의하기" />
    </SafeAreaView>
  );
};

export default InquiryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
});
