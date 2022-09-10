import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface DisabledPageProps {}

const DisabledPage = (props: DisabledPageProps) => {
  return (
    <SignUpTemplate currentStep={3}>
      <Title step={3} text="회원 유형" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        가입 회원 유형을 선택해주세요
      </Text>
    </SignUpTemplate>
  );
};

export default DisabledPage;

const styles = StyleSheet.create({
  container: {},
});
