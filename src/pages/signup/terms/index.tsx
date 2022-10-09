import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { H_PADDING } from '@/constants';
import { SERVICE_TERMS_HTML } from '@/constants/terms';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { Checkbox } from 'react-native-paper';

interface TermsPageProps extends NativeStackScreenProps<SignUpStackParamList, 'TermsPage'> {}

const TermsPage = ({ navigation, route }: TermsPageProps) => {
  // const [allSel]

  return (
    <SignUpTemplate
      currentStep={1}
      btnProps={{
        onPress: () =>
          navigation.navigate('UserTypeSelectPage', { loginInfo: route.params.loginInfo }),
      }}
    >
      <Title step={1} text="이용약관" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        회원가입 전 이용약관에 동의해주세요
      </Text>
      <Pressable style={styles.checkAllContainer}>
        <Checkbox.Android
          status="checked"
          // status={checkedIdxList.length === CHECK_LIST.length ? 'checked' : 'unchecked'}
          uncheckedColor="#c9c9c9"
        />
        <Text sizeStyle="f14" weightStyle="medium" style={styles.checkAllText}>
          모두 확인했습니다
        </Text>
      </Pressable>
      {/* <AutoHeightWebView
        containerStyle={{ width: width - H_PADDING * 2 }}
        source={{ html: SERVICE_TERMS_HTML }}
      /> */}
    </SignUpTemplate>
  );
};

export default TermsPage;

const styles = StyleSheet.create({
  mt6: { marginTop: 6 },
  checkAllContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  checkAllText: { color: THEME.LIGHT_TEXT },
});
