import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import * as React from 'react';
import { StyleSheet } from 'react-native';

interface TermsPageProps {}

const TermsPage = (props: TermsPageProps) => {
  return (
    <SignUpTemplate>
      <Text>약관 페이지</Text>
    </SignUpTemplate>
  );
};

export default TermsPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  ctaContainer: { position: 'absolute', left: H_PADDING, right: H_PADDING },
  process: { marginTop: 24 },
});
