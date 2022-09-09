import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const CURRENT_STEP = 2;
interface UserTypeSelectPageProps
  extends NativeStackScreenProps<SignUpStackParamList, 'UserTypeSelectPage'> {}

const UserTypeSelectPage = (props: UserTypeSelectPageProps) => {
  return (
    <SignUpTemplate currentStep={CURRENT_STEP}>
      <Title step={CURRENT_STEP} text="회원 유형" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        가입 회원 유형을 선택해주세요
      </Text>
    </SignUpTemplate>
  );
};

export default UserTypeSelectPage;

const styles = StyleSheet.create({
  container: {},
  mt6: { marginTop: 6 },
});
