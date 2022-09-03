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
});
