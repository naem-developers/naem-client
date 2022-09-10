import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from '@/pages/signup/signup';
import DisabilityCertificatePage from '@/pages/signup/disabilityCertificate';
import TermsPage from '@/pages/signup/terms';
import UserTypeSelectPage from '@/pages/signup/userTypeSelect';
import DisabledPage from '@/pages/signup/disabled/indext';
import SignUpCompletePage from '@/pages/signup/signUpComplete';
import ParentsPage from '@/pages/signup/parents';

export type SignUpStackParamList = {
  SignUpPage: { loginInfo: any };
  DisabilityCertificatePage: undefined;
  TermsPage: { loginInfo: any } | undefined;
  UserTypeSelectPage: { loginInfo: any } | undefined;
  DisabledPage: { loginInfo: any } | undefined;
  ParentsPage: { loginInfo: any } | undefined;
  SignUpCompletePage: undefined;
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
    </Stack.Navigator>
  );
};

export default SignUpStackNavigator;
