import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import IMP from 'iamport-react-native';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PhoneCertificatePageProps
  extends NativeStackScreenProps<SignUpStackParamList, 'PhoneCertificatePage'> {}

const PhoneCertificatePage = ({ navigation }: PhoneCertificatePageProps) => {
  const data = {
    merchant_uid: `mid_${new Date().getTime()}`,
    company: '아임포트',
    carrier: 'SKT',
    name: '홍길동',
    phone: '01012341234',
    min_age: '',
  };

  return (
    <SafeAreaView style={styles.container}>
      <IMP.Certification
        userCode={'iamport'} // 가맹점 식별코드
        data={data}
        callback={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default PhoneCertificatePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
});
