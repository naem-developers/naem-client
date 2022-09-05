import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from '@/pages/signup/signup';
import DisabilityCertificatePage from '@/pages/signup/disabilityCertificate';

export type SignUpStackParamList = {
  SignUpPage: { loginInfo: any };
  DisabilityCertificatePage: undefined;
};

const Stack = createNativeStackNavigator();

const SignUpStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUpPage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="DisabilityCertificatePage" component={DisabilityCertificatePage} />
    </Stack.Navigator>
  );
};

export default SignUpStackNavigator;
