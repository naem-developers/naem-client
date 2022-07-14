import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '@pages/landing';
import SignUpStackNavigator from '@navigators/SignUpStackNavigator';
import MainTabNavigator from '@navigators/MainTabNavigator';
import LoginPage from '@/pages/login';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="landing" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" component={LandingPage} />
      <Stack.Screen name="SignUpStackNavigator" component={SignUpStackNavigator} />
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
