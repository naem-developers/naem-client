import Button from '@/components/atoms/Button';
import TextInput from '@/components/atoms/TextInput';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RadioButton } from 'react-native-paper';
import Text from '@/components/atoms/Text';

const USER_TYPE = {
  DISABLED: 'DISABLED',
  PROTECTOR: 'PROTECTOR',
};
import { validateId, validatePhoneNum, validatePw, validateNickname } from '@/utils/validation';

interface SignUpPageProps extends NativeStackScreenProps<SignUpStackParamList, 'SignUpPage'> {}

const SignUpPage = ({ navigation }: SignUpPageProps) => {
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [userType, setUserType] = useState<string>(USER_TYPE.DISABLED);
  const [recommenderCode, setRecommenderCode] = useState<string>('');
  const [phoneNumValidationMsg, setPhoneNumValidationMsg] = useState<string>('');
  const [idValidationMsg, setIdValidationMsg] = useState<string>('');
  const [pwValidationMsg, setPwValidationMsg] = useState<string>('');
  const [nicknameValidationMsg, setNicknameValidationMsg] = useState<string>('');

  const checkPhoneNum = useCallback(() => {
    const tempPhoneValidMsg = validatePhoneNum(phoneNum);
    setPhoneNumValidationMsg(tempPhoneValidMsg);
    return !!tempPhoneValidMsg;
  }, [phoneNum]);

  const checkId = useCallback(() => {
    const tempIdValidMsg = validateId(id);
    setIdValidationMsg(tempIdValidMsg);
    return !!tempIdValidMsg;
  }, [id]);

  const checkPw = useCallback(() => {
    const tempPwValidMsg = validatePw(pw);
    setPwValidationMsg(tempPwValidMsg);
    return !!tempPwValidMsg;
  }, [pw]);

  const checkNickname = useCallback(() => {
    const tempNicknameValidMsg = validateNickname(nickname);
    setNicknameValidationMsg(tempNicknameValidMsg);
    return !!tempNicknameValidMsg;
  }, [nickname]);

  // TODO: 함수 구현
  const handleSendCertNum = useCallback(() => {
    if (!checkPhoneNum()) return;
  }, [checkPhoneNum]);
  const handleCheckDuplicateId = useCallback(() => {
    if (!checkId()) return;
  }, [checkId]);
  const handleCheckDuplicateNickname = useCallback(() => {
    if (!checkNickname()) return;
  }, [checkNickname]);
  const handleCheckRecommenderCode = useCallback(() => {}, []);

  const handlePickDisabled = useCallback(() => {
    setUserType(USER_TYPE.DISABLED);
  }, []);

  const handlePickProtector = useCallback(() => {
    setUserType(USER_TYPE.PROTECTOR);
  }, []);

  const renderCertificate = useCallback(() => {
    return (
      <>
        {userType === USER_TYPE.DISABLED ? (
          <>
            <Text sizeStyle="f14" weightStyle="medium" style={styles.subtitle}>
              장애인 인증
              <Text sizeStyle="f14" style={styles.starSup}>
                *
              </Text>
            </Text>
            {/* TODO: 인증 여부 플래그 추가 */}
            <Button
              text="장애인 인증하러 가기"
              priority="secondary"
              style={styles.mt10}
              onPress={() => {
                navigation.navigate('DisabilityCertificatePage');
              }}
            />
          </>
        ) : (
          <>
            <Text sizeStyle="f14" weightStyle="medium" style={styles.subtitle}>
              추천인 코드
              <Text sizeStyle="f14" style={styles.starSup}>
                *
              </Text>
            </Text>
            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="아이디를 입력해주세요"
                value={recommenderCode}
                onChangeText={(text) => setRecommenderCode(text)}
              />
              <Button
                text="확인"
                btnSize="small"
                style={styles.btn}
                onPress={handleCheckRecommenderCode}
              />
            </View>
          </>
        )}
      </>
    );
  }, [userType, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="회원가입" />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <Text sizeStyle="f14" weightStyle="medium" style={styles.subtitle}>
          회원 유형 선택
          <Text sizeStyle="f14" style={styles.starSup}>
            *
          </Text>
        </Text>
        <View style={styles.row}>
          <Pressable style={[styles.row, styles.flex1]} onPress={handlePickDisabled}>
            <RadioButton.Android
              value={USER_TYPE.DISABLED}
              status={userType === USER_TYPE.DISABLED ? 'checked' : 'unchecked'}
              onPress={handlePickDisabled}
            />
            <Text sizeStyle="f17" weightStyle="medium" style={styles.radioText}>
              장애인 본인
            </Text>
          </Pressable>
          <Pressable style={[styles.row, styles.flex1]} onPress={handlePickProtector}>
            <RadioButton.Android
              value={USER_TYPE.PROTECTOR}
              status={userType === USER_TYPE.PROTECTOR ? 'checked' : 'unchecked'}
              onPress={handlePickProtector}
            />
            <Text sizeStyle="f17" weightStyle="medium" style={styles.radioText}>
              장애인 보호자
            </Text>
          </Pressable>
        </View>
        <Text sizeStyle="f14" weightStyle="medium" style={styles.subtitle}>
          휴대폰 번호
          <Text sizeStyle="f14" style={styles.starSup}>
            *
          </Text>
        </Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="‘-’ 없이 입력해주세요"
            keyboardType="number-pad"
            value={phoneNum}
            onChangeText={(text) => setPhoneNum(text)}
            onBlur={checkPhoneNum}
            validationMsg={phoneNumValidationMsg}
          />
          <Button
            text="인증번호 발송"
            btnSize="small"
            style={styles.btn}
            onPress={handleSendCertNum}
          />
        </View>
        <Text sizeStyle="f14" weightStyle="medium" style={styles.subtitle}>
          아이디
          <Text sizeStyle="f14" style={styles.starSup}>
            *
          </Text>
        </Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="아이디를 입력해주세요"
            value={id}
            onChangeText={(text) => setId(text)}
            onBlur={checkId}
            validationMsg={idValidationMsg}
          />
          <Button
            text="중복 확인"
            btnSize="small"
            style={styles.btn}
            onPress={handleCheckDuplicateId}
          />
        </View>
        <Text sizeStyle="f14" weightStyle="medium" style={styles.subtitle}>
          비밀번호
          <Text sizeStyle="f14" style={styles.starSup}>
            *
          </Text>
        </Text>
        <TextInput
          style={[styles.input, styles.mt10]}
          placeholder="8~16자 이내 (영문 대소문자, 숫자, 특수문자 포함)"
          secureTextEntry
          value={pw}
          onChangeText={(text) => setPw(text)}
          onBlur={checkPw}
          validationMsg={pwValidationMsg}
          maxLength={16}
        />
        <Text sizeStyle="f14" weightStyle="medium" style={styles.subtitle}>
          닉네임
          <Text sizeStyle="f14" style={styles.starSup}>
            *
          </Text>
        </Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="10자 이내, 특수문자 불가"
            value={nickname}
            onChangeText={(text) => setNickname(text)}
            onBlur={checkNickname}
            validationMsg={nicknameValidationMsg}
            maxLength={10}
          />
          <Button
            text="중복 확인"
            btnSize="small"
            style={styles.btn}
            onPress={handleCheckDuplicateNickname}
          />
        </View>
        {renderCertificate()}
        {/* TODO: disabled 여부 */}
        <Button text="완료" style={styles.ctaBtn} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    backgroundColor: THEME.BG,
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: H_PADDING,
  },
  subtitle: {
    color: THEME.STRONG_TEXT,
    marginTop: 32,
  },
  radioContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  radioText: {
    lineHeight: 25,
    color: THEME.STRONG_TEXT,
  },
  input: {
    flexShrink: 1,
  },
  starSup: {
    marginLeft: 2,
    color: THEME.POINT,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    alignItems: 'flex-start',
  },
  btn: {
    borderRadius: 10,
    marginLeft: 12,
    paddingTop: 14,
    paddingBottom: 14,
  },
  ctaBtn: {
    marginTop: 108,
    marginBottom: 100,
  },
  mt10: {
    marginTop: 10,
  },
});
