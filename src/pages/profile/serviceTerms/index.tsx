import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { SERVICE_TERMS_HTML } from '@/constants/terms';
import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ServiceTermsPageProps {}

const ServiceTermsPage = (props: ServiceTermsPageProps) => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="서비스 이용약관" />
      <AutoHeightWebView
        containerStyle={[styles.webviewContainer, { width: width - H_PADDING * 2 }]}
        source={{ html: SERVICE_TERMS_HTML }}
      />
    </SafeAreaView>
  );
};

export default ServiceTermsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
  webviewContainer: { paddingHorizontal: H_PADDING },
});
