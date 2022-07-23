import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '@pages/landing';
import SignUpStackNavigator from '@navigators/SignUpStackNavigator';
import MainTabNavigator from '@navigators/MainTabNavigator';
import LoginPage from '@/pages/login/login';
import FindIdPage from '@/pages/login/findId';
import FindPwPage from '@/pages/login/findPw';
import PostPage from '@/pages/post/post';
import ProfileEditPage from '@/pages/profile/profileEdit';
import EventPage from '@/pages/profile/event';
import MyPostCommentPage from '@/pages/profile/myPostComment';
import NoticePage from '@/pages/profile/notice';
import NotificationSetting from '@/pages/profile/notificationSetting';
import ServiceTermsPage from '@/pages/profile/serviceTerms';

export type RootStackParamList = {
  landing: undefined;
  SignUpStackNavigator: undefined;
  MainTabNavigator: undefined;
  LoginPage: undefined;
  FindIdPage: undefined;
  FindPwPage: undefined;
  PostPage: undefined;
  ProfileEditPage: undefined;
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
      <Stack.Screen name="ProfileEditPage" component={ProfileEditPage} />
      <Stack.Screen name="EventPage" component={EventPage} />
      <Stack.Screen name="MyPostCommentPage" component={MyPostCommentPage} />
      <Stack.Screen name="NoticePage" component={NoticePage} />
      <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
      <Stack.Screen name="ServiceTermsPage" component={ServiceTermsPage} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
