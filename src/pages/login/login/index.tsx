import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import { H_PADDING } from '@/constants';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCheckDefault from '@/assets/icons/icn_checkbox_default.svg';
import IcnCheckSelect from '@/assets/icons/icn_checkbox_select.svg';
import { THEME } from '@/theme';
import TextBtn from '@/components/atoms/TextBtn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import TextInput from '@/components/atoms/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface LoginPageProps extends NativeStackScreenProps<RootStackParamList, 'LoginPage'> {}
{
}

const LoginPage = ({ navigation }: LoginPageProps) => {
  // TODO: recoil 전역 상태 관리 값으로 관리하기
  const [isSaveLoginStatus, setIsSaveLoginStatus] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const handlePressSubmit = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={require('@/assets/logos/logo_eng.png')} style={styles.logo} />
        <TextInput
          placeholder="아이디 입력"
          placeholderTextColor="#AEAEAE"
          value={id}
          onChangeText={(text) => setId(text)}
        />
        <TextInput
          placeholder="비밀번호 입력"
          placeholderTextColor="#AEAEAE"
          style={styles.mt14}
          secureTextEntry
          value={pw}
          onChangeText={(text) => setPw(text)}
        />
        <TouchableOpacity
          style={styles.loginStatus}
          onPress={() => setIsSaveLoginStatus((status) => !status)}
          accessibilityRole="button"
          accessibilityState={{ selected: isSaveLoginStatus }}
          accessibilityLabel={isSaveLoginStatus ? '로그인 상태 유지' : '로인 상태 유지하지 않음'}
        >
          {isSaveLoginStatus ? (
            <IcnCheckSelect width={20} height={20} />
          ) : (
            <IcnCheckDefault width={20} height={20} />
          )}
          <Text style={styles.loginStatusText}>로그인 상태 유지</Text>
        </TouchableOpacity>
        <Button text="확인" style={styles.button} onPress={handlePressSubmit} />
        <View style={styles.btnsContainer}>
          <TextBtn
            text="아이디 찾기"
            textStyle={styles.btnsText}
            onPress={() => {
              navigation.navigate('FindIdPage');
            }}
          />
          <View style={styles.verticalDivider} />
          <TextBtn
            text="비밀번호 재설정"
            textStyle={styles.btnsText}
            onPress={() => {
              navigation.navigate('FindPwPage');
            }}
          />
          <View style={styles.verticalDivider} />
          <TextBtn
            text="회원가입"
            textStyle={styles.btnsText}
            onPress={() => {
              navigation.navigate('SignUpStackNavigator');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: { backgroundColor: THEME.BG, flex: 1 },
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
  loginStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 19,
  },
  loginStatusText: {
    fontSize: 15,
    color: THEME.REG_TEXT,
    marginLeft: 7,
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
  },
  btnsText: {
    color: THEME.REG_TEXT,
    fontSize: 15,
  },
  verticalDivider: {
    width: 1,
    height: 10,
    backgroundColor: THEME.LIGHT_TEXT,
    marginHorizontal: 18,
  },
  mt14: {
    marginTop: 14,
  },
});
