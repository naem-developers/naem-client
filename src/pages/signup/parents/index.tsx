import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import TextInput from '@/components/atoms/TextInput';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { validateNickname } from '@/utils/validation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import IcnArrowRight from '@/assets/icons/icn_arrow_right.svg';
import usePostSignUp from '@/hooks/api/auth/usePostSignUp';
import Toast from 'react-native-toast-message';
import useFetchCheckNickname from '@/hooks/api/auth/useFetchCheckNickname';

interface ParentsPageProps extends NativeStackScreenProps<SignUpStackParamList, 'ParentsPage'> {}

const ParentsPage = ({ navigation, route }: ParentsPageProps) => {
  const { loginInfo } = route.params;

  const [inputHeight, setInputHeight] = useState<number | undefined>();
  const [nickname, setNickname] = useState<string>('');
  const [nicknameValidationMsg, setNicknameValidationMsg] = useState<string>('');
  const [recommendationCode, setRecommendationCode] = useState<string>('');
  const [isNicknameNotDuplicated, setIsNicknameNotDuplicated] = useState<boolean | undefined>(
    undefined,
  );
  const [isNicknameLoading, setisNicknameLoading] = useState<boolean>(false);

  const postSignUp = usePostSignUp();
  const fetchCheckNickname = useFetchCheckNickname({ nickname }, !!nickname?.length, {
    onError: (e) => {
      if (e.response.data.error === 'CONFLICT' || e.repsonse.status === 409) {
        setIsNicknameNotDuplicated(false);
        setNicknameValidationMsg('중복된 닉네임이 존재합니다.');
        return;
      }
      console.error('nickname check err, ', e);
    },
  });

  const checkNickname = useCallback(async () => {
    const tempNicknameValidMsg = validateNickname(nickname);
    if (tempNicknameValidMsg?.length > 0) {
      setNicknameValidationMsg(tempNicknameValidMsg);
      return;
    }
    setNicknameValidationMsg('');

    setisNicknameLoading(true);
    const checkNicknameResult = await fetchCheckNickname.refetch();
    setisNicknameLoading(false);
    if (checkNicknameResult.data?.response === 'OK') {
      setIsNicknameNotDuplicated(true);
      Toast.show({ type: 'success', text1: '사용 가능한 닉네임입니다.' });
      return;
    }
  }, [nickname]);

  const handlePressNext = useCallback(() => {
    postSignUp.mutate(
      {
        // TODO: 카카오 로그인 구현 완성될 때 id로 바꾸기
        username: nickname,
        password: loginInfo.password,
        // TODO: PROTECTOR인 경우 추천인 코드 받는지 확인하기
        memberType: 'PROTECTOR',
        phoneNumber: '010-1234-5678',
        nickname: nickname,
      },
      {
        onSuccess: () => {
          navigation.navigate('SignUpCompletePage');
        },
        onError: (e) => {
          Toast.show({ type: 'error', text1: '회원가입에 실패하였습니다.' });
          console.error('회원가입에 실패하였습니다.', e);
        },
      },
    );
  }, [loginInfo, nickname]);

  return (
    <SignUpTemplate
      currentStep={3}
      btnProps={{
        onPress: handlePressNext,
        disabled:
          recommendationCode?.length === 0 ||
          nickname?.length === 0 ||
          !!nicknameValidationMsg?.length ||
          !isNicknameNotDuplicated ||
          isNicknameLoading,
      }}
    >
      <Title step={3} text="닉네임" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        나음에서 사용할 닉네임을 조건에 맞게 입력해주세요
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
      <Title step={4} text="추천인 코드" style={styles.mt62} />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        나음에서 사용할 닉네임을 조건에 맞게 입력해주세요
      </Text>
      <TextInput
        containerStyle={styles.mt10}
        placeholder="추천인 코드를 입력해주세요"
        value={recommendationCode}
        onChangeText={(text) => setRecommendationCode(text)}
      />
      <Pressable style={styles.recommendationCodeCheckContainer}>
        <Text sizeStyle="f13" weightStyle="semiBold" colorStyle="regText" style={styles.mr2}>
          추천인 코드 확인 방법 보러가기
        </Text>
        <IcnArrowRight width={10} height={10} />
      </Pressable>
    </SignUpTemplate>
  );
};

export default ParentsPage;

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 10 },
  duplicateBtn: { marginLeft: 12 },
  sampleImg: { height: 208, aspectRatio: 1.75, marginTop: 10 },
  recommendationCodeCheckContainer: { marginTop: 10, flexDirection: 'row', alignItems: 'center' },
  mt6: { marginTop: 6 },
  mt10: { marginTop: 10 },
  mt16: { marginTop: 16 },
  mt62: { marginTop: 62 },
  mr2: { marginRight: 2 },
});
