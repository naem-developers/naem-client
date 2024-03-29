import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpStackNavigator, { SignUpStackParamList } from '@navigators/SignUpStackNavigator';
import MainTabNavigator from '@navigators/MainTabNavigator';

import LoginPage from '@/pages/login/login';
import PostPage from '@/pages/post/post';
import SearchPage from '@/pages/search';
import ProfileEditPage from '@/pages/profile/profileEdit';
import EventPage from '@/pages/profile/event';
import MyPostCommentPage from '@/pages/profile/myPostComment';
import NoticePage from '@/pages/profile/notice';
import NotificationSettingPage from '@/pages/profile/notificationSetting';
import ServiceTermsPage from '@/pages/profile/serviceTerms';
import WithdrawlPage from '@/pages/profile/withdrawl';
import WriteNewPost from '@/pages/home/write';
import BoardDetail from '@/pages/board/BoardDetail';
import { NavigatorScreenParams } from '@react-navigation/core';
import { useRecoilState } from 'recoil';
import { globalState } from '@/store/atoms';
import Report from '@/pages/board/Report';
import { Comments, postedData } from '@/types';
import InquiryPage from '@/pages/profile/inquiry';

export type RootStackParamList = {
  SignUpStackNavigator: NavigatorScreenParams<SignUpStackParamList>;
  MainTabNavigator: undefined;
  LoginPage: undefined;
  PostPage: undefined;
  SearchPage: undefined;
  ProfileEditPage: undefined;
  EventPage: undefined;
  MyPostCommentPage: { type: 'post' | 'comment' };
  NoticePage: undefined;
  NotificationSettingPage: undefined;
  ServiceTermsPage: undefined;
  Report: { data: postedData | Comments };
  WithdrawlPage: undefined;
  BoardDetail: { id: number };
  InquiryPage: undefined;
};

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const [state] = useRecoilState(globalState);

  return (
    <Stack.Navigator
      initialRouteName={state.isLogin ? 'MainTabNavigator' : 'LoginPage'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignUpStackNavigator" component={SignUpStackNavigator} />
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />

      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="PostPage" component={PostPage} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="ProfileEditPage" component={ProfileEditPage} />
      <Stack.Screen name="EventPage" component={EventPage} />
      <Stack.Screen name="MyPostCommentPage" component={MyPostCommentPage} />
      <Stack.Screen name="NoticePage" component={NoticePage} />
      <Stack.Screen name="NotificationSettingPage" component={NotificationSettingPage} />
      <Stack.Screen name="ServiceTermsPage" component={ServiceTermsPage} />
      <Stack.Screen name="WithdrawlPage" component={WithdrawlPage} />
      <Stack.Screen name="WriteNewPost" component={WriteNewPost} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="BoardDetail" component={BoardDetail} />
      <Stack.Screen name="InquiryPage" component={InquiryPage} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
