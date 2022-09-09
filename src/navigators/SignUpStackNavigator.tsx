import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from '@/pages/signup/signup';
import DisabilityCertificatePage from '@/pages/signup/disabilityCertificate';
import TermsPage from '@/pages/signup/terms';

export type SignUpStackParamList = {
  SignUpPage: { loginInfo: any };
  DisabilityCertificatePage: undefined;
  TermsPage: { loginInfo: any };
};

const Stack = createNativeStackNavigator();

const SignUpStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUpPage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="TermsPage" component={TermsPage} />
      <Stack.Screen name="DisabilityCertificatePage" component={DisabilityCertificatePage} />
    </Stack.Navigator>
  );
};

export default SignUpStackNavigator;
