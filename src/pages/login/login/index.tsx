import Text from '@/components/atoms/Text';
import { H_PADDING } from '@/constants';
import React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getProfile as getKakaoProfile, login } from '@react-native-seoul/kakao-login';
import usePostSignIn from '@/hooks/api/auth/usePostSignIn';

// TODO: 로그인 id 중복 여부에 따라 willLogin 나누기
const willLogin = true;
const EXAMPLE_ID = 'example1';
const EXAMPLE_PW = 'example1';

interface LoginPageProps extends NativeStackScreenProps<RootStackParamList, 'LoginPage'> {}
{
}

const LoginPage = ({ navigation }: LoginPageProps) => {
  const signIn = usePostSignIn();

  const signInWithKakao = async (): Promise<void> => {
    // TODO: ios 카카오 연동하기
    if (Platform.OS === 'ios' || __DEV__) {
      if (willLogin) {
        signIn.mutate({ username: EXAMPLE_ID, password: EXAMPLE_PW });
      } else {
        navigation.navigate('SignUpStackNavigator', {
          screen: 'TermsPage',
          params: {
            loginInfo: {
              loginId: 'loginId1',
              password: 'password1',
            },
          },
        });
      }

      return;
    }
    try {
      login().then((res) => {
        if (willLogin) {
          signIn.mutate({ username: EXAMPLE_ID, password: EXAMPLE_PW });
        } else {
          navigation.navigate('SignUpStackNavigator', {
            screen: 'TermsPage',
            params: { loginInfo: res },
          });
        }
      });
    } catch (err) {
      console.error('login err', err);
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
