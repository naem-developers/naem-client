import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';

const CURRENT_STEP = 2;

// TODO: UserType 서버 값과 통일하기
type UserType = 'disabled' | 'parents';

interface UserTypeSelectPageProps
  extends NativeStackScreenProps<SignUpStackParamList, 'UserTypeSelectPage'> {}

const UserTypeSelectPage = (props: UserTypeSelectPageProps) => {
  const [userType, setUserType] = useState<UserType | undefined>();

  return (
    <SignUpTemplate currentStep={CURRENT_STEP}>
      <Title step={CURRENT_STEP} text="회원 유형" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        가입 회원 유형을 선택해주세요
      </Text>
      <View style={[styles.alignCenter, styles.mt28]}>
        <Pressable style={styles.alignCenter} onPress={() => setUserType('disabled')}>
          <View style={[styles.typeContainer, userType === 'disabled' && styles.selectedBorder]}>
            <Image
              style={styles.disabledImg}
              source={require('@/assets/images/signup/disabled.png')}
            />
          </View>
          <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt12}>
            장애인 본인
          </Text>
        </Pressable>
        <Pressable style={[styles.alignCenter, styles.mt60]} onPress={() => setUserType('parents')}>
          <View style={[styles.typeContainer, userType === 'parents' && styles.selectedBorder]}>
            <Image
              style={styles.parentsImg}
              source={require('@/assets/images/signup/parents.png')}
            />
          </View>
          <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt12}>
            장애인 보호자
          </Text>
        </Pressable>
      </View>
    </SignUpTemplate>
  );
};

export default UserTypeSelectPage;

const styles = StyleSheet.create({
  container: {},
  typeContainer: {
    width: 156,
    height: 116,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    borderColor: THEME.LIGHT_LINE,
    borderWidth: 1.5,
  },
  selectedBorder: { borderColor: THEME.MAIN, borderWidth: 2 },
  disabledImg: { width: 42.51, height: 56.89 },
  parentsImg: { width: 64, height: 42 },
  alignCenter: { alignItems: 'center', marginTop: 28 },
  mt6: { marginTop: 6 },
  mt12: { marginTop: 12 },
  mt28: { marginTop: 28 },
  mt60: { marginTop: 60 },
});