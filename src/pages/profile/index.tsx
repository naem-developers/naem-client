import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCopy from '@/assets/icons/icn_copy.svg';
import Clipboard from '@react-native-clipboard/clipboard';
import { Snackbar } from 'react-native-paper';
import Tag from '@/components/molecules/Tag';
import Button from '@/components/atoms/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';

interface MyPageProps extends NativeStackScreenProps<RootStackParamList, 'MainTabNavigator'> {}

const RECOMMENDER_CODE_TEXT = 'abc1234';
const DISBALED_TYPES = ['뇌병변장애', '장루, 요루장애', '지체장애'];

const MyPage = ({ navigation }: MyPageProps) => {
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);

  const copyRecommenderCode = () => {
    Clipboard.setString(RECOMMENDER_CODE_TEXT);
    setSnackbarVisible(true);
  };

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
        <Pressable style={[styles.row, styles.mt6]} onPress={copyRecommenderCode}>
          <Text style={{ ...styles.subtitle, ...styles.mr5 }}>추천인코드</Text>
          <Text style={{ ...styles.recommenderCodeText, ...styles.mr1 }}>
            {RECOMMENDER_CODE_TEXT}
          </Text>
          <IcnCopy width={15} height={15} />
        </Pressable>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.mhMinus16}
          contentContainerStyle={[styles.row, styles.mt16, styles.mh16]}
        >
          {DISBALED_TYPES.map((typeItem, tagIndex) => {
            return (
              <Tag
                key={typeItem}
                text={`#${typeItem}`}
                style={tagIndex === 0 ? {} : styles.ml10}
                disabled
              />
            );
          })}
        </ScrollView>
        <Button
          text="프로필 편집"
          priority="secondary"
          style={styles.profileEditBtn}
          onPress={() => navigation.navigate('ProfileEditPage')}
        />
      </ScrollView>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        추천인 코드가 복사되었습니다
      </Snackbar>
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
    paddingHorizontal: 16,
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
  profileEditBtn: {
    marginTop: 18,
    paddingVertical: 8,
  },
  mt16: {
    marginTop: 16,
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
  ml16: {
    marginLeft: 16,
  },
  ml10: {
    marginLeft: 10,
  },
  mh16: {
    marginHorizontal: 16,
  },
  mhMinus16: {
    marginHorizontal: -16,
  },
});
