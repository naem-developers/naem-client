import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from '@/pages/signup/signup';
import DisabilityCertificatePage from '@/pages/signup/disabilityCertificate';
import TermsPage from '@/pages/signup/terms';
import UserTypeSelectPage from '@/pages/signup/userTypeSelect';
import DisabledPage from '@/pages/signup/disabled';
import SignUpCompletePage from '@/pages/signup/signUpComplete';
import ParentsPage from '@/pages/signup/parents';
import ServiceTermsPage from '@/pages/profile/serviceTerms';

export interface LoginInfo {
  loginId: string;
  password: string;
}

export type SignUpStackParamList = {
  SignUpPage: { loginInfo: LoginInfo };
  DisabilityCertificatePage: undefined;
  TermsPage: { loginInfo: LoginInfo };
  UserTypeSelectPage: { loginInfo: LoginInfo };
  DisabledPage: { loginInfo: LoginInfo };
  ParentsPage: { loginInfo: LoginInfo };
  SignUpCompletePage: undefined;
  ServiceTermsPage: undefined;
};

const Stack = createNativeStackNavigator();

const SignUpStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUpPage"
      screenOptions={{ headerShown: false, animation: 'none' }}
    >
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="TermsPage" component={TermsPage} />
      <Stack.Screen name="UserTypeSelectPage" component={UserTypeSelectPage} />
      <Stack.Screen name="DisabledPage" component={DisabledPage} />
      <Stack.Screen name="ParentsPage" component={ParentsPage} />
      <Stack.Screen name="SignUpCompletePage" component={SignUpCompletePage} />
      <Stack.Screen name="DisabilityCertificatePage" component={DisabilityCertificatePage} />
      <Stack.Screen name="ServiceTermsPage" component={ServiceTermsPage} />
    </Stack.Navigator>
  );
};

export default SignUpStackNavigator;
