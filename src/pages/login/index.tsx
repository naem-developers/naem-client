import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import { H_PADDING } from '@/constants';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCheckDefault from '@/assets/icons/icn_checkbox_default.svg';

interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={require('@/assets/logos/logo_eng.png')} style={styles.logo} />
        <TextInput placeholder="아이디 입력" placeholderTextColor="#AEAEAE" style={styles.input} />
        <TextInput
          placeholder="비밀번호 입력"
          placeholderTextColor="#AEAEAE"
          style={[styles.input, styles.mt14]}
          secureTextEntry
        />
        <IcnCheckDefault width={20} height={20} />
        <Button text="확인" style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingHorizontal: H_PADDING,
    alignItems: 'center',
  },
  logo: {
    width: 146,
    height: 42.52,
    marginTop: 104,
    marginBottom: 116,
  },
  input: {
    padding: 14,
    width: '100%',
    borderColor: '#e4e4e4',
    borderWidth: 1.2,
    borderRadius: 10,
  },
  button: {
    marginTop: 21,
  },
  mt14: {
    marginTop: 14,
  },
});
