import Text from '@/components/atoms/Text';
import { H_PADDING } from '@/constants';
import React, { useCallback, useState } from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  getProfile,
  KakaoOAuthToken,
  KakaoProfile,
  KakaoProfileNoneAgreement,
  login,
} from '@react-native-seoul/kakao-login';
import usePostSignIn from '@/hooks/api/auth/usePostSignIn';
import useFetchCheckId from '@/hooks/api/auth/useFetchCheckId';
import { useRecoilState } from 'recoil';
import { globalState } from '@/store/atoms';

const EXAMPLE_ID = 'example1';
const EXAMPLE_PW = 'example1';

interface KakaoResponse extends KakaoOAuthToken, KakaoProfile {}

interface LoginPageProps extends NativeStackScreenProps<RootStackParamList, 'LoginPage'> {}
{
}

const LoginPage = ({ navigation }: LoginPageProps) => {
  const [state, setState] = useRecoilState(globalState);
  const [kakaoEmail, setKakaoEmail] = useState('');

  const signIn = usePostSignIn();
  const checkId = useFetchCheckId({ username: kakaoEmail }, !!kakaoEmail?.length);

  const handleAuth = useCallback(
    (isDev: boolean, willLogin: boolean, responseFromKakao?: Partial<KakaoResponse>) => {
      try {
        if (willLogin) {
          if (__DEV__) {
            navigation.navigate('MainTabNavigator');
          }
          if (!responseFromKakao?.email || !responseFromKakao?.id) {
            throw Error('카카오 이메일 혹은 아이디가 없음');
          }
          signIn.mutate(
            { username: responseFromKakao?.email, password: responseFromKakao?.id },
            {
              onSuccess: () => {
                setState({ ...state, isLogin: true });
              },
            },
          );
        } else {
          navigation.navigate('SignUpStackNavigator', {
            screen: 'TermsPage',
            params: {
              loginInfo: isDev
                ? {
                    loginId: 'loginId1',
                    password: 'password1',
                  }
                : { loginId: responseFromKakao?.email!, password: responseFromKakao?.id! },
            },
          });
        }
      } catch (err) {
        console.error(err);
      }
    },
    [EXAMPLE_ID, EXAMPLE_PW],
  );

  const signInWithKakao = useCallback(async (): Promise<void> => {
    if (__DEV__) {
      setState({ ...state, isLogin: true });
      handleAuth(true, true, { email: EXAMPLE_ID, id: EXAMPLE_PW });
      return;
    }
    try {
      login().then(async (res) => {
        const profile: KakaoProfile = await getProfile();
        setKakaoEmail(profile.email);
        const checkIdResult = await checkId.refetch();
        handleAuth(false, checkIdResult.data.response !== 'OK', { ...res, ...profile });
      });
    } catch (err) {
      console.error('login err', err);
    }
  }, [handleAuth]);

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
