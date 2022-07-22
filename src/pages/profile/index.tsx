import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCopy from '@/assets/icons/icn_copy.svg';

interface MyPageProps {}

const MyPage = (props: MyPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.profileImg}
          source={require('@/assets/images/img_profile_photo.png')}
        />
        {/* TODO: 유저 이름 */}
        <Text style={styles.greetingText}>
          안녕하세요, <Text style={styles.strongText}>김나미</Text> 님!
        </Text>
        <Text style={styles.bio}>안녕하세요~! 남양주시에 살고 있습니다</Text>
        <Pressable style={[styles.row, styles.mt6]}>
          <Text style={{ ...styles.subtitle, ...styles.mr5 }}>추천인코드</Text>
          <Text style={{ ...styles.recommenderCodeText, ...styles.mr1 }}>abc1234</Text>
          <IcnCopy width={15} height={15} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 204,
  },
  scrollView: {
    alignItems: 'center',
  },
  profileImg: {
    width: 86,
    height: 86,
    borderRadius: 50,
  },
  greetingText: {
    marginTop: 18,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
  },
  strongText: {
    fontWeight: '800',
  },
  bio: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    color: THEME.REG_TEXT,
    marginTop: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    color: THEME.REG_TEXT,
  },

  recommenderCodeText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
    color: THEME.STRONG_TEXT,
  },
  mt6: {
    marginTop: 6,
  },
  mr5: {
    marginRight: 5,
  },
  mr1: {
    marginRight: 1,
  },
});
