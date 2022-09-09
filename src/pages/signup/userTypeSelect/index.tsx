import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

interface UserTypeSelectPageProps
  extends NativeStackScreenProps<SignUpStackParamList, 'UserTypeSelectPage'> {}

const UserTypeSelectPage = (props: UserTypeSelectPageProps) => {
  return (
    <SignUpTemplate currentStep={2}>
      <Text>가입 회원 유형을 선택해주세요</Text>
    </SignUpTemplate>
  );
};

export default UserTypeSelectPage;

const styles = StyleSheet.create({
  container: {},
});
