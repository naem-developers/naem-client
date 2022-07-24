import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '@pages/landing';
import SignUpStackNavigator from '@navigators/SignUpStackNavigator';
import MainTabNavigator from '@navigators/MainTabNavigator';
import LoginPage from '@/pages/login/login';
import FindIdPage from '@/pages/login/findId';
import FindPwPage from '@/pages/login/findPw';
import PostPage from '@/pages/post/post';
import SearchPage from '@/pages/search';

export type RootStackParamList = {
  landing: undefined;
  SignUpStackNavigator: undefined;
  MainTabNavigator: undefined;
  LoginPage: undefined;
  FindIdPage: undefined;
  FindPwPage: undefined;
  PostPage: undefined;
  SearchPage: undefined;
};

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="landing" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" component={LandingPage} />
      <Stack.Screen name="SignUpStackNavigator" component={SignUpStackNavigator} />
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="FindIdPage" component={FindIdPage} />
      <Stack.Screen name="FindPwPage" component={FindPwPage} />
      <Stack.Screen name="PostPage" component={PostPage} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
