import Text from '@/components/atoms/Text';
import SwitchItem from '@/components/myPage/SwitchItem';
import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NotificationSettingPageProps {}

const NotificationSettingPage = (props: NotificationSettingPageProps) => {
  const [totalOn, setTotalOn] = useState<boolean>(false);
  const [commentOn, setCommentOn] = useState<boolean>(false);
  const [keywordOn, setKeywordOn] = useState<boolean>(false);
  const [eventOn, setEventOn] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="알림 설정" />
      <ScrollView>
        <SwitchItem text="알림 허용" value={totalOn} onValueChange={() => setTotalOn((v) => !v)} />
        {totalOn && (
          <>
            <SwitchItem
              text="댓글"
              value={commentOn}
              onValueChange={() => setCommentOn((v) => !v)}
            />
            <SwitchItem
              text="관심 키워드 인기 게시글"
              value={keywordOn}
              onValueChange={() => setKeywordOn((v) => !v)}
            />
            <SwitchItem text="이벤트" value={eventOn} onValueChange={() => setEventOn((v) => !v)} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationSettingPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
});
