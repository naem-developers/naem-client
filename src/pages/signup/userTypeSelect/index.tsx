import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CURRENT_STEP = 2;

// TODO: UserType 서버 값과 통일하기
type UserType = 'disabled' | 'parents';

interface UserTypeSelectPageProps
  extends NativeStackScreenProps<SignUpStackParamList, 'UserTypeSelectPage'> {}

const UserTypeSelectPage = ({ navigation, route }: UserTypeSelectPageProps) => {
  const { bottom } = useSafeAreaInsets();

  const [userType, setUserType] = useState<UserType | undefined>();

  const handlePressCTA = useCallback(() => {
    navigation.navigate(userType === 'disabled' ? 'DisabledPage' : 'ParentsPage', {
      loginInfo: route.params.loginInfo,
    });
  }, [userType]);

  return (
    <SignUpTemplate
      currentStep={CURRENT_STEP}
      btnProps={{ disabled: !Boolean(userType), onPress: handlePressCTA }}
    >
      <Title step={CURRENT_STEP} text="회원 유형" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        가입 회원 유형을 선택해주세요
      </Text>
      <View style={[styles.alignCenter, styles.mt28]}>
        <Pressable style={styles.alignCenter} onPress={() => setUserType('disabled')}>
          <View style={styles.typeContainer}>
            <Image
              style={styles.disabledImg}
              source={require('@/assets/images/signup/img_disabled.png')}
            />
            <View style={[styles.border, userType === 'disabled' && styles.selectedBorder]} />
          </View>
          <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt12}>
            장애인 본인
          </Text>
        </Pressable>
        <Pressable style={[styles.alignCenter, styles.mt60]} onPress={() => setUserType('parents')}>
          <View style={styles.typeContainer}>
            <Image
              style={styles.parentsImg}
              source={require('@/assets/images/signup/img_parents.png')}
            />
            <View style={[styles.border, userType === 'parents' && styles.selectedBorder]} />
          </View>
          <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt12}>
            장애인 보호자
          </Text>
        </Pressable>
      </View>
      <Text
        sizeStyle="f13"
        weightStyle="mediumn"
        colorStyle="lightText"
        style={[styles.mt70, { marginBottom: bottom + 90 }]}
      >
        장애인 보호자로 가입 시 추천인 코드가 필요합니다 이미 가입하신 장애인 회원으로부터 추천인
        코드를 받을 수 있습니다
      </Text>
    </SignUpTemplate>
  );
};

export default UserTypeSelectPage;

const styles = StyleSheet.create({
  typeContainer: {
    width: 156,
    height: 116,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    ...StyleSheet.absoluteFillObject,
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
  mt70: { marginTop: 70 },
});
