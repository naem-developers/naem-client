import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PhoneCertificatePageProps {}

const PhoneCertificatePage = (props: PhoneCertificatePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="아이디 찾기" />
      <Text>PhoneCertificatePage</Text>
    </SafeAreaView>
  );
};

export default PhoneCertificatePage;

const styles = StyleSheet.create({
  container: {},
});
