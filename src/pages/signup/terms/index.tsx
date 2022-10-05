import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import { H_PADDING } from '@/constants';
import { SERVICE_TERMS_HTML } from '@/constants/terms';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

interface TermsPageProps extends NativeStackScreenProps<SignUpStackParamList, 'TermsPage'> {}

const TermsPage = ({ navigation, route }: TermsPageProps) => {
  const { width } = useWindowDimensions();

  return (
    <SignUpTemplate
      currentStep={1}
      btnProps={{
        onPress: () =>
          navigation.navigate('UserTypeSelectPage', { loginInfo: route.params.loginInfo }),
      }}
    >
      <AutoHeightWebView
        containerStyle={{ width: width - H_PADDING * 2 }}
        source={{ html: SERVICE_TERMS_HTML }}
      />
    </SignUpTemplate>
  );
};

export default TermsPage;
