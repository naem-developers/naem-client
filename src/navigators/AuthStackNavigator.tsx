import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneCertificatePage, { AuthType } from '@/pages/auth/phoneCertificate';
import FindIdPage from '@/pages/login/findId';

export type AuthStackParamList = {
  PhoneCertificatePage: { type: AuthType };
  FindIdPage: undefined;
};

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PhoneCertificatePage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PhoneCertificatePage" component={PhoneCertificatePage} />
      <Stack.Screen name="FindIdPage" component={FindIdPage} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
