import Header from '@/components/organisms/Header';
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCheck from '@/assets/icons/icn_check.svg';
import { THEME } from '@/theme';

interface DisabilityCertificatePageProps {}

const DisabilityCertificatePage = (props: DisabilityCertificatePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="장애인 등록증 확인" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <IcnCheck width={54} height={54} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisabilityCertificatePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 38,
    alignItems: 'center',
  },
});
