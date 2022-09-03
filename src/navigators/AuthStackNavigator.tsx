import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneCertificatePage, { AuthType } from '@/pages/auth/phoneCertificate';

export type AuthStackParamList = {
  PhoneCertificatePage: { type: AuthType };
};

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PhoneCertificatePage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PhoneCertificatePage" component={PhoneCertificatePage} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
