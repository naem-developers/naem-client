import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import TextInput from '@/components/atoms/TextInput';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { validateNickname } from '@/utils/validation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface DisabledPageProps extends NativeStackScreenProps<SignUpStackParamList, 'DisabledPage'> {}

const DisabledPage = ({ navigation }: DisabledPageProps) => {
  const [inputHeight, setInputHeight] = useState<number | undefined>();
  const [nickname, setNickname] = useState<string>('');
  const [nicknameValidationMsg, setNicknameValidationMsg] = useState<string>('');

  const checkNickname = useCallback(() => {
    const tempNicknameValidMsg = validateNickname(nickname);
    setNicknameValidationMsg(tempNicknameValidMsg);
    return !!tempNicknameValidMsg;
  }, [nickname]);

  const handlePressNext = useCallback(() => {}, []);

  return (
    <SignUpTemplate
      currentStep={3}
      btnProps={{ onPress: handlePressNext, disabled: nickname?.length === 0 || !checkNickname }}
    >
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
      <Title step={4} text="장애인 인증" style={styles.mt62} />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        장애인 등록증 혹은 기타 서류가 필요합니다
      </Text>
      <View>
        <Image
          style={styles.sampleImg}
          source={require('@/assets/images/img_certificate_ex.png')}
        />
      </View>
      <Button
        text="장애인 인증하러 가기"
        priority="secondary"
        style={styles.mt16}
        onPress={() => {
          navigation.navigate('DisabilityCertificatePage');
        }}
      />
    </SignUpTemplate>
  );
};

export default DisabledPage;

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 10 },
  duplicateBtn: { marginLeft: 12 },
  sampleImg: { height: 208, aspectRatio: 1.75, marginTop: 10 },
  mt6: { marginTop: 6 },
  mt16: { marginTop: 16 },
  mt62: { marginTop: 62 },
});
