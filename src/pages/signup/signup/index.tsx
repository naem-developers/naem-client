import Button from '@/components/atoms/Button';
import TextInput from '@/components/atoms/TextInput';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SignUpPageProps extends NativeStackScreenProps<SignUpStackParamList, 'SignUp'> {}

const SignUpPage = ({ navigation }: SignUpPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="회원가입" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.subtitle}>
          휴대폰 번호<Text style={styles.starSup}>*</Text>
        </Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="‘-’ 없이 입력해주세요"
            keyboardType="number-pad"
          />
          <Button text="인증번호 발송" btnSize="small" style={styles.btn} />
        </View>
        <Text style={styles.subtitle}>
          아이디<Text style={styles.starSup}>*</Text>
        </Text>
        <View style={styles.row}>
          <TextInput style={styles.input} placeholder="아이디를 입력해주세요" />
          <Button text="중복 확인" btnSize="small" style={styles.btn} />
        </View>
        <Text style={styles.subtitle}>
          비밀번호<Text style={styles.starSup}>*</Text>
        </Text>
        <TextInput
          style={[styles.input, styles.mt10]}
          placeholder="8~13자 이내 (영문, 숫자, 특수문자 포함)"
          secureTextEntry
        />
        <Text style={styles.subtitle}>
          닉네임<Text style={styles.starSup}>*</Text>
        </Text>
        <View style={styles.row}>
          <TextInput style={styles.input} placeholder="5자 이내, 특수문자 불가" />
          <Button text="중복 확인" btnSize="small" style={styles.btn} />
        </View>
        <Text style={styles.subtitle}>
          비밀번호<Text style={styles.starSup}>*</Text>
        </Text>
        <Button
          text="장애인 등록 인증하러 가기"
          priority="secondary"
          style={styles.mt10}
          onPress={() => {
            navigation.navigate('DisabilityCertificatePage');
          }}
        />
        <Button text="완료" style={styles.ctaBtn} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BG,
    flex: 1,
  },
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
    flexShrink: 1,
  },
  starSup: {
    marginLeft: 2,
    color: THEME.POINT,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    borderRadius: 10,
    marginLeft: 12,
    paddingTop: 14,
    paddingBottom: 14,
  },
  ctaBtn: {
    marginTop: 108,
    marginBottom: 100,
  },
  mt10: {
    marginTop: 10,
  },
});
