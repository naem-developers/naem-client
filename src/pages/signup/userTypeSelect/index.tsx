import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';

const CURRENT_STEP = 2;
interface UserTypeSelectPageProps
  extends NativeStackScreenProps<SignUpStackParamList, 'UserTypeSelectPage'> {}

const UserTypeSelectPage = (props: UserTypeSelectPageProps) => {
  return (
    <SignUpTemplate currentStep={CURRENT_STEP}>
      <Title step={CURRENT_STEP} text="회원 유형" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        가입 회원 유형을 선택해주세요
      </Text>
      <View style={[styles.alignCenter, styles.mt28]}>
        <Pressable style={styles.alignCenter}>
          <View style={styles.typeContainer}>
            <Image
              style={styles.disabledImg}
              source={require('@/assets/images/signup/disabled.png')}
            />
          </View>
          <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt12}>
            장애인 본인
          </Text>
        </Pressable>
        <Pressable style={[styles.alignCenter, styles.mt60]}>
          <View style={styles.typeContainer}>
            <Image
              style={styles.parentsImg}
              source={require('@/assets/images/signup/parents.png')}
            />
          </View>
          <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt12}>
            장애인 본인
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
    // ...StyleSheet.absoluteFillObject,
    borderRadius: 28,
    borderColor: THEME.LIGHT_LINE,
    borderWidth: 1.5,
  },
  disabledImg: { width: 42.51, height: 56.89 },
  parentsImg: { width: 64, height: 42 },
  alignCenter: { alignItems: 'center', marginTop: 28 },
  mt6: { marginTop: 6 },
  mt12: { marginTop: 12 },
  mt28: { marginTop: 28 },
  mt60: { marginTop: 60 },
});
