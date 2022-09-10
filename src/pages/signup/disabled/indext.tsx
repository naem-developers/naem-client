import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import TextInput from '@/components/atoms/TextInput';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { validateNickname } from '@/utils/validation';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';

interface DisabledPageProps {}

const DisabledPage = (props: DisabledPageProps) => {
  const [inputHeight, setInputHeight] = useState<number | undefined>();
  const [nickname, setNickname] = useState<string>('');
  const [nicknameValidationMsg, setNicknameValidationMsg] = useState<string>('');

  const checkNickname = useCallback(() => {
    const tempNicknameValidMsg = validateNickname(nickname);
    setNicknameValidationMsg(tempNicknameValidMsg);
    return !!tempNicknameValidMsg;
  }, [nickname]);

  return (
    <SignUpTemplate currentStep={3}>
      <Title step={3} text="회원 유형" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        가입 회원 유형을 선택해주세요
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="10자 이내, 특수문자 불가"
          onLayout={(e) => {
            setInputHeight(e.nativeEvent.layout.height);
          }}
          maxLength={10}
          value={nickname}
          onChangeText={(text) => setNickname(text)}
          onBlur={checkNickname}
          validationMsg={nicknameValidationMsg}
        />
        <Button
          text="중복 확인"
          btnSize="small"
          style={[styles.duplicateBtn, { height: inputHeight }]}
          onPress={checkNickname}
        />
      </View>
    </SignUpTemplate>
  );
};

export default DisabledPage;

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 10 },
  duplicateBtn: { marginLeft: 12 },
  mt6: { marginTop: 6 },
});
