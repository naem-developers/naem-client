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
  return (
    <SafeAreaView style={styles.container}>
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
        <TouchableOpacity style={styles.ctaBtn}>
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
