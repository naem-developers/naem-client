import Header from '@/components/organisms/Header';
import * as React from 'react';
import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCheck from '@/assets/icons/icn_check.svg';
import { THEME } from '@/theme';
import Text from '@/components/atoms/Text';

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
});
