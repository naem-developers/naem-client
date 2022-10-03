import Header from '@/components/organisms/Header';
import { SERVICE_TERMS_HTML } from '@/constants/terms';
import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ServiceTermsPageProps {}

const ServiceTermsPage = (props: ServiceTermsPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="서비스 이용약관" />
      <AutoHeightWebView source={{ html: SERVICE_TERMS_HTML }} />
    </SafeAreaView>
  );
};

export default ServiceTermsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
});
