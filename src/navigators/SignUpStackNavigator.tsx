import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from '@pages/signup';

export type SignUpStackParamList = {
  SignUp: undefined;
};

const Stack = createNativeStackNavigator();

const SignUpStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default SignUpStackNavigator;
