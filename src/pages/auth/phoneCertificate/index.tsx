import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type AuthType = 'findId';

interface PhoneCertificatePageProps
  extends NativeStackScreenProps<RootStackParamList, 'PhoneCertificatePage'> {}
{
}

const assetMapper: Record<AuthType, { title: string; headerText?: string }> = {
  findId: { title: '아이디 찾기', headerText: '회원가입 시 등록한 휴대폰 번호를 입력해주세요' },
};

const PhoneCertificatePage = ({ route }: PhoneCertificatePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={assetMapper[route.params.type].title} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text sizeStyle="f14" weightStyle="mediumn" colorStyle="strongText">
          {assetMapper[route.params.type]?.headerText}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneCertificatePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainerStyle: { paddingHorizontal: H_PADDING, paddingTop: 22, paddingBottom: 20 },
});
