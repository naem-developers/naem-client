import TextInput from '@/components/atoms/TextInput';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import * as React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SignUpPageProps {}

const SignUpPage = (props: SignUpPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="회원가입" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.subtitle}>휴대폰 번호</Text>
        <TextInput
          style={styles.input}
          placeholder="‘-’ 없이 입력해주세요"
          keyboardType="number-pad"
        />
        <Text style={styles.subtitle}>아이디</Text>
        <TextInput style={styles.input} placeholder="아이디를 입력해주세요" />
        <Text style={styles.subtitle}>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="8~13자 이내 (영문, 숫자, 특수문자 포함)"
          secureTextEntry
        />
        <Text style={styles.subtitle}>닉네임</Text>
        <TextInput style={styles.input} placeholder="5자 이내, 특수문자 불가" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingHorizontal: H_PADDING,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: THEME.STRONG_TEXT,
    marginTop: 32,
  },
  input: {
    marginTop: 10,
  },
});
