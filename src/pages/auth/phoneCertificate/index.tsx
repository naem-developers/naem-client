import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import TextInput from '@/components/atoms/TextInput';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export type AuthType = 'findId';

interface PhoneCertificatePageProps
  extends NativeStackScreenProps<RootStackParamList, 'PhoneCertificatePage'> {}
{
}

const assetMapper: Record<AuthType, { title: string; headerText?: string }> = {
  findId: { title: '아이디 찾기', headerText: '회원가입 시 등록한 휴대폰 번호를 입력해주세요' },
};

const PhoneCertificatePage = ({ route }: PhoneCertificatePageProps) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Header title={assetMapper[route.params.type].title} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text sizeStyle="f14" weightStyle="mediumn" colorStyle="strongText">
          {assetMapper[route.params.type]?.headerText}
        </Text>
        <View style={[styles.row, styles.mt10]}>
          <TextInput
            placeholder="‘-’ 없이 입력해주세요"
            style={styles.input}
            keyboardType="number-pad"
          />
          <Button priority="primary" text="인증번호 전송" btnSize="small" style={styles.button} />
        </View>
        <View style={[styles.row, styles.mt16]}>
          <TextInput placeholder="인증번호 입력" style={styles.input} keyboardType="number-pad" />
          <Button priority="primary" disabled text="확인" btnSize="small" style={styles.button} />
        </View>
      </ScrollView>
      <View style={[styles.cta, { marginBottom: insets.bottom }]}>
        <Button text="완료" />
      </View>
    </SafeAreaView>
  );
};

export default PhoneCertificatePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainerStyle: { paddingHorizontal: H_PADDING, paddingTop: 22, paddingBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center' },
  mt16: { marginTop: 16 },
  mt10: { marginTop: 10 },
  button: { borderRadius: 10, marginLeft: 12, paddingTop: 14, paddingBottom: 14 },
  input: { flexShrink: 1 },
  cta: { paddingHorizontal: H_PADDING, bottom: 20, position: 'absolute', width: '100%' },
});
