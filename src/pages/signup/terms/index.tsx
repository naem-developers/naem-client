import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import Process from '@/components/signup/process';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface TermsPageProps {}

const TermsPage = (props: TermsPageProps) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="회원가입" />
      <Process style={styles.process} />
      <ScrollView>
        <Text>약관 페이지</Text>
      </ScrollView>
      <View style={[styles.ctaContainer, { bottom: 20 + insets.bottom }]}>
        <Button text="다음" />
      </View>
    </SafeAreaView>
  );
};

export default TermsPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  ctaContainer: { position: 'absolute', left: H_PADDING, right: H_PADDING },
  process: { marginTop: 24 },
});
