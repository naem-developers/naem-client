import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/routers';
import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface SignUpCompletePageProps
  extends NativeStackScreenProps<SignUpStackParamList, 'DisabledPage'> {}

const SignUpCompletePage = ({ navigation }: SignUpCompletePageProps) => {
  return (
    <SignUpTemplate
      currentStep={4}
      btnProps={{
        text: '로그인 하러 가기',
        onPress: () => {
          navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'LoginPage' }] }));
        },
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.congratulation}
          source={require('@/assets/images/signup/img_congratulation.png')}
        />
        <Image source={require('@/assets/logos/logo_eng.png')} style={styles.logo} />
        <Text style={styles.mt40} sizeStyle="f19" weightStyle="semiBold" colorStyle="black">
          회원가입 완료!
        </Text>
        <Text style={styles.mt12} sizeStyle="f14" weightStyle="medium" colorStyle="regText">
          로그인 후 나음 서비스를 이용하실 수 있습니다
        </Text>
      </View>
    </SignUpTemplate>
  );
};

export default SignUpCompletePage;

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  congratulation: { width: 140, height: 50, marginTop: 140 },
  logo: { width: 140, height: 41, marginTop: 18 },
  mt12: { marginTop: 12 },
  mt40: { marginTop: 40 },
});
