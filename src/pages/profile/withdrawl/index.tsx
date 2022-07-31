import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import TextInput from '@/components/atoms/TextInput';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const CHECK_LIST = [
  '계정 삭제 시 나음에서 작성한 모든 게시글과 활동 내역 이 삭제됩니다. 이 정보는 다시 복구할 수 없습니다.',
  '다른 사람의 글에 단 댓글은 삭제되지 않으니 유의 바랍니다.',
];

const REASON_LIST = ['사유 1', '시유 2', '사유 3', '기타'];

interface WithdrawlPageProps {}

const WithdrawlPage = (props: WithdrawlPageProps) => {
  const [checkedIdxList, setCheckedIdxList] = useState<number[]>([]);
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [etcReason, setEtcReason] = useState<string>('');

  const handleCheckItem = useCallback(
    (checkIndex: number) => {
      if (checkedIdxList.includes(checkIndex)) {
        setCheckedIdxList((v) => v.filter((item) => item !== checkIndex));
      } else {
        setCheckedIdxList((v) => [...v, checkIndex]);
      }
    },
    [checkedIdxList],
  );

  const handleCheckAll = useCallback(() => {
    if (checkedIdxList.length === CHECK_LIST.length) {
      setCheckedIdxList([]);
    } else {
      setCheckedIdxList([...Array(CHECK_LIST.length).keys()]);
    }
  }, [checkedIdxList]);

  const handleSelectReason = useCallback((reason: string) => {
    setSelectedReason(reason);
  }, []);

  const handleWithdraw = () => {};

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
                style={[styles.row, checkIndex !== 0 && styles.mt12]}
                onPress={() => {
                  handleCheckItem(checkIndex);
                }}
              >
                <Checkbox.Android
                  status={checkedIdxList.includes(checkIndex) ? 'checked' : 'unchecked'}
                  uncheckedColor="#c9c9c9"
                />
                <Text sizeStyle="f14" weightStyle="medium" style={styles.checkText}>
                  {checkItem}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <Pressable style={styles.checkAllContainer} onPress={handleCheckAll}>
          <Checkbox.Android
            status={checkedIdxList.length === CHECK_LIST.length ? 'checked' : 'unchecked'}
            uncheckedColor="#c9c9c9"
          />
          <Text sizeStyle="f14" weightStyle="medium" style={styles.checkAllText}>
            모두 확인했습니다
          </Text>
        </Pressable>
        <Text sizeStyle="f14" weightStyle="medium" style={[styles.title, styles.mt48]}>
          탈퇴 사유 (선택)
        </Text>
        {REASON_LIST.map((reasonItem, reasonIndex) => {
          return (
            <Pressable
              key={reasonItem}
              style={styles.radioContainer}
              onPress={() => {
                handleSelectReason(reasonItem);
              }}
            >
              <RadioButton.Android
                value={reasonItem}
                status={selectedReason === reasonItem ? 'checked' : 'unchecked'}
                onPress={() => {
                  handleSelectReason(reasonItem);
                }}
              />
              <Text sizeStyle="f14" weightStyle="medium" style={styles.radioText}>
                {reasonItem}
              </Text>
            </Pressable>
          );
        })}
        <TextInput
          placeholder="기타 사유를 입력해 주세요"
          style={styles.mt10}
          onChangeText={(text) => {
            setEtcReason(text);
            if (text.length > 0) {
              handleSelectReason('기타');
            }
          }}
        />
        <Button
          text="탈퇴하기"
          style={styles.mt76}
          onPress={handleWithdraw}
          disabled={checkedIdxList.length !== CHECK_LIST.length}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WithdrawlPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainer: { paddingHorizontal: H_PADDING },
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
  checkText: { flex: 1, color: THEME.REG_TEXT },
  checkAllContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  checkAllText: { color: THEME.LIGHT_TEXT },
  radioText: { color: THEME.REG_TEXT },
  radioContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 14 },
  mt10: { marginTop: 10 },
  mt12: { marginTop: 12 },
  mt22: { marginTop: 22 },
  mt48: { marginTop: 48 },
  mt76: { marginTop: 76 },
});
