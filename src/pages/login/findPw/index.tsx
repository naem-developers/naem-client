import Text from '@/components/atoms/Text';
import TextInput from '@/components/atoms/TextInput';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import { validatePw } from '@/utils/validation';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FindPwPageProps {}

const FindPwPage = (props: FindPwPageProps) => {
  const [pw, setPw] = useState<string>('');
  const [pwValidationMsg, setPwValidationMsg] = useState<string>('');

  const checkPw = useCallback(() => {
    const tempPwValidMsg = validatePw(pw);
    setPwValidationMsg(tempPwValidMsg);
    return !!tempPwValidMsg;
  }, [pw]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="비밀번호 변경" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.title, styles.mt22]} sizeStyle="f14" weightStyle="medium">
          기존 비밀번호
        </Text>
        <TextInput
          style={styles.input}
          placeholder="8~16자 이내 (영문 대소문자, 숫자, 특수문자 포함)"
          secureTextEntry
          value={pw}
          onChangeText={(text) => setPw(text)}
          onBlur={checkPw}
          validationMsg={pwValidationMsg}
          maxLength={16}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FindPwPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainer: { paddingHorizontal: H_PADDING },
  title: { color: THEME.STRONG_TEXT },
  input: { marginTop: 10 },
  mt22: { marginTop: 22 },
});
