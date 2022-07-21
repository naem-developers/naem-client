import Header from '@/components/organisms/Header';
import * as React from 'react';
import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCheck from '@/assets/icons/icn_check.svg';
import { THEME } from '@/theme';
import Text from '@/components/atoms/Text';

const CAUTION_LIST = [
  `•빛 반사가 되지 않도록 촬영해주세요.
  어두운 바닥에서 촬영하면 잘 인식됩니다.`,
  '•복사본이나 사진은 사용할 수 없습니다.',
  '•장애인 등록증이 없는 경우 그 외 가능한 서류로 인증 가능합니다.',
];

interface DisabilityCertificatePageProps {}

const DisabilityCertificatePage = (props: DisabilityCertificatePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="장애인 등록증 확인" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <IcnCheck width={54} height={54} />
        <Text style={styles.mainText}>
          장애인 인증을 위해{'\n'}
          <Text style={styles.mainColor}>장애인 등록증</Text>을 준비해주세요
        </Text>
        <Pressable style={styles.sampleImgBtn}>
          <Image
            style={styles.sampleImg}
            source={require('@/assets/images/img_certificate_ex.png')}
          />
        </Pressable>
        <Text style={styles.cautionTitle}>주의사항</Text>
        {CAUTION_LIST.map((cautionText) => (
          <Text style={styles.cautionText}>{cautionText}</Text>
        ))}
        <Text style={styles.otherDocText}>
          <Text style={styles.otherDocStrongText}>그 외 가능한 서류</Text> 로 인증하기
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisabilityCertificatePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 38,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
    color: THEME.STRONG_TEXT,
    marginTop: 16,
  },
  mainColor: {
    color: THEME.MAIN,
  },
  sampleImgBtn: {
    width: '100%',
    marginTop: 26,
    aspectRatio: 1.74,
  },
  sampleImg: {
    width: '100%',
    height: '100%',
  },
  cautionTitle: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '700',
    color: THEME.REG_TEXT,
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  cautionText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    color: THEME.LIGHT_TEXT,
    alignSelf: 'flex-start',
  },
  otherDocText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: THEME.STRONG_TEXT,
    marginTop: 30,
  },
  otherDocStrongText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    color: THEME.MAIN,
    textDecorationLine: 'underline',
  },
});
