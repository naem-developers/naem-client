import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const CHECK_LIST = [
  '계정 삭제 시 나음에서 작성한 모든 게시글과 활동 내역 이 삭제됩니다. 이 정보는 다시 복구할 수 없습니다.',
  '다른 사람의 글에 단 댓글은 삭제되지 않으니 유의 바랍니다.',
];

interface WithdrawlPageProps {}

const WithdrawlPage = (props: WithdrawlPageProps) => {
  const [checkedIdxList, setCheckedIdxList] = useState<number[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="회원 탈퇴" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text sizeStyle="f14" weightStyle="medium" style={[styles.title, styles.mt22]}>
          유의사항 (필수)
        </Text>

        <View style={styles.checkContainer}>
          {CHECK_LIST.map((checkItem, checkIndex) => {
            return (
              <Pressable
                key={checkItem}
                style={styles.row}
                onPress={() => {
                  if (checkedIdxList.includes(checkIndex)) {
                    setCheckedIdxList((v) => v.filter((item) => item !== checkIndex));
                  } else {
                    setCheckedIdxList((v) => [...v, 0]);
                  }
                }}
              >
                <Checkbox.Android status={checkedIdxList.includes(0) ? 'checked' : 'unchecked'} />
                <Text>{checkItem}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WithdrawlPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainer: { paddingHorizontal: H_PADDING },
  mt22: { marginTop: 22 },
  title: { color: THEME.REG_TEXT },
  checkContainer: {
    paddingTop: 14,
    paddingHorizontal: 14,
    paddingBottom: 12,
    marginTop: 6,
    backgroundColor: THEME.LIGHT_GRAY,
  },
  row: { flexDirection: 'row', alignItems: 'flex-start' },
  checkBox: { width: 20, height: 20, backgroundColor: 'red' },
});
