import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import IcnCopy from '@/assets/icons/icn_copy.svg';
import IcnArticle from '@/assets/icons/icn_article.svg';
import IcnComment from '@/assets/icons/icn_comment.svg';
import Clipboard from '@react-native-clipboard/clipboard';
import { Snackbar } from 'react-native-paper';
import Tag from '@/components/molecules/Tag';
import Button from '@/components/atoms/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import SettingsItem from '@/components/myPage/SettingsItem';
import { clearToken } from '@/utils/auth';

interface MyPageProps extends NativeStackScreenProps<RootStackParamList, 'MainTabNavigator'> {}

const RECOMMENDER_CODE_TEXT = 'abc1234';
const DISBALED_TYPES = ['뇌병변장애', '장루, 요루장애', '지체장애'];

const MyPage = ({ navigation }: MyPageProps) => {
  const insets = useSafeAreaInsets();

  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);

  const copyRecommenderCode = () => {
    Clipboard.setString(RECOMMENDER_CODE_TEXT);
    setSnackbarVisible(true);
  };

  // TODO: 함수 구현
  const handleInquiry = () => {};
  const handleLogout = () => {
    clearToken();
  };
  const openLogoutAlert = () => {
    Alert.alert('', '로그아웃 하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
      },
      { text: '로그아웃', onPress: handleLogout },
    ]);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
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
        <View style={styles.myPostContainer}>
          <TouchableOpacity
            style={styles.myPostBtn}
            onPress={() => {
              navigation.navigate('MyPostCommentPage', {
                type: 'post',
              });
            }}
          >
            <IcnArticle width={24} height={24} />
            <Text style={styles.myPostText}>내 게시글</Text>
            <Text style={styles.myPostNumber}>
              <Text style={styles.myPostNumberStrong}>10</Text> 개
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.myPostBtn, styles.ml14]}
            onPress={() => {
              navigation.navigate('MyPostCommentPage', {
                type: 'comment',
              });
            }}
          >
            <IcnComment width={24} height={24} />
            <Text style={styles.myPostText}>내 댓글</Text>
            <Text style={styles.myPostNumber}>
              <Text style={styles.myPostNumberStrong}>10</Text> 개
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsContainer}>
          <Text style={styles.settingTitle}>앱 설정</Text>
          <SettingsItem
            text="알림 설정"
            onPress={() => {
              navigation.navigate('NotificationSettingPage');
            }}
          />
          <Text style={styles.settingTitle}>앱 정보</Text>
          <SettingsItem
            text="공지사항"
            onPress={() => {
              navigation.navigate('NoticePage');
            }}
          />
          <SettingsItem
            text="이벤트"
            onPress={() => {
              navigation.navigate('EventPage');
            }}
          />
          <SettingsItem
            text="서비스 이용약관"
            onPress={() => {
              navigation.navigate('ServiceTermsPage');
            }}
          />
          <SettingsItem text="문의하기" onPress={handleInquiry} />
          <Text style={styles.settingTitle}>계정</Text>
          <SettingsItem text="로그아웃" onPress={openLogoutAlert} />
          <SettingsItem
            text="회원 탈퇴"
            onPress={() => {
              navigation.navigate('WithdrawlPage');
            }}
          />
        </View>
      </ScrollView>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        추천인 코드가 복사되었습니다
      </Snackbar>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
    alignItems: 'center',
    paddingTop: 14,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
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
  myPostContainer: {
    marginTop: 16,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myPostBtn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    paddingTop: 13,
    borderRadius: 10,
    borderColor: THEME.LIGHT_BOX,
    borderWidth: 1,
  },
  myPostText: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22,
    marginTop: 2,
  },
  myPostNumber: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22,
    color: THEME.REG_TEXT,
    marginTop: 14,
  },
  myPostNumberStrong: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 22,
    color: THEME.STRONG_TEXT,
  },
  settingsContainer: {
    paddingBottom: 204,
    paddingHorizontal: 0,
    marginHorizontal: -16,
    backgroundColor: '#f5f5f5',
    alignSelf: 'stretch',
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    color: THEME.REG_TEXT,
    paddingHorizontal: 16,
    paddingBottom: 6,
    paddingTop: 28,
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
  ml14: {
    marginLeft: 14,
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
