import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PhoneCertificatePageProps {}

const PhoneCertificatePage = (props: PhoneCertificatePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PhoneCertificatePage</Text>
    </SafeAreaView>
  );
};

export default PhoneCertificatePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
});
