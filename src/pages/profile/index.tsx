import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MyPageProps {}

const MyPage = (props: MyPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.profileImg}
          source={require('@/assets/images/img_profile_photo.png')}
        />
        <Text style={styles.greetingText}>안녕하세요, 김나미 님!</Text>
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
});
