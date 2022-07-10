import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../pages/landing';
import SignUpStackNavigator from './SignUpStackNavigator';

const Stack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="landing"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="landing" component={LandingPage} />
      <Stack.Screen
        name="SignUpStackNavigator"
        component={SignUpStackNavigator}
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
