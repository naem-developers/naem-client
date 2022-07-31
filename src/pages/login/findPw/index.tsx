import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FindPwPageProps {}

const FindPwPage = (props: FindPwPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="비밀번호 변경" />
      <Text>FindPwPage</Text>
    </SafeAreaView>
  );
};

export default FindPwPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
});
