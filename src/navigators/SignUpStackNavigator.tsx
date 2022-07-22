import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from '@/pages/signup/signup';
import DisabilityCertificatePage from '@/pages/signup/disabilityCertificate';

export type SignUpStackParamList = {
  SignUp: undefined;
  DisabilityCertificatePage: undefined;
};

const Stack = createNativeStackNavigator();

const SignUpStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="DisabilityCertificatePage" component={DisabilityCertificatePage} />
    </Stack.Navigator>
  );
};

export default SignUpStackNavigator;
