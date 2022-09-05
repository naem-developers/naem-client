import Text from '@/components/atoms/Text';
import { H_PADDING } from '@/constants';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

interface LoginPageProps extends NativeStackScreenProps<RootStackParamList, 'LoginPage'> {}
{
}

const LoginPage = ({ navigation }: LoginPageProps) => {
  const [result, setResult] = useState<any>();
  console.log('result, ', result);

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();

      setResult(JSON.stringify(token));
    } catch (err) {
      console.error('login err', err);
    }
  };

  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();

      setResult(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profile = await getKakaoProfile();

      setResult(JSON.stringify(profile));
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const unlinkKakao = async (): Promise<void> => {
    try {
      const message = await unlink();

      setResult(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('@/assets/images/img_background_logo.png')} style={styles.bgLogo} />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={require('@/assets/logos/logo_eng.png')} style={styles.logo} />
        <Text style={styles.title}>
          <Text sizeStyle="f20" weightStyle="bold" colorStyle="strongText">
            장애인과 장애인 보호자라면{'\n'}
            커뮤니티 플랫폼{' '}
          </Text>
          <Text sizeStyle="f20" weightStyle="bold" colorStyle="main">
            나음
          </Text>
        </Text>
        <View style={styles.loginTextContainer}>
          <View style={styles.line} />
          <Text
            sizeStyle="f15"
            weightStyle="medium"
            colorStyle="lightText"
            style={styles.loginText}
          >
            로그인 후 이용해보세요
          </Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.ctaBtn} onPress={signInWithKakao}>
          <Text sizeStyle="f16" weightStyle="semiBold" colorStyle="strongText">
            카카오톡으로 빠른 시작 👉🏻
          </Text>
        </TouchableOpacity>
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
  bgLogo: { position: 'absolute', right: 0, bottom: 0, width: 282, height: 422 },
  logo: {
    width: 146,
    height: 42.52,
    marginTop: 104,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
  },
  title: { alignSelf: 'flex-start', marginHorizontal: 16, marginTop: 24 },
  loginTextContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 234 },
  line: { flex: 1, height: 1, backgroundColor: THEME.LIGHT_LINE },
  loginText: { marginHorizontal: 16 },
  ctaBtn: {
    marginTop: 26,
    backgroundColor: '#F7E600',
    color: THEME.STRONG_TEXT,
    paddingTop: 15,
    paddingBottom: 14,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
