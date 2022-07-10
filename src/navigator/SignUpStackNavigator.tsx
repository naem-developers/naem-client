import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpPage from '../pages/signup';

const Stack = createNativeStackNavigator();

function SignUpStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="signUp" component={SignUpPage} />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;
