import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import { H_PADDING } from '@/constants';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';

interface TermsPageProps extends NativeStackScreenProps<SignUpStackParamList, 'TermsPage'> {}

const TermsPage = ({ navigation }: TermsPageProps) => {
  return (
    <SignUpTemplate currentStep={1} onPressNext={() => navigation.navigate('UserTypeSelectPage')}>
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
