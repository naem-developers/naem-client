import Header from '@/components/organisms/Header';
import React, { useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Pressable, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCheck from '@/assets/icons/icn_check.svg';
import { THEME } from '@/theme';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import ImagePicker, { PossibleArray } from 'react-native-image-crop-picker';
import BottomSheetMenu from '@/components/organisms/BottomSheetMenu';
import usePostAuthDisabled from '@/hooks/api/auth/usePostAuthDisabled';
import Toast from 'react-native-toast-message';

const CARD_RATIO = 1.5858;
const CARD_WIDTH = 300;
const CARD_HEIGHT = CARD_WIDTH / CARD_RATIO;

const CAUTION_LIST = [
  `• 빛 반사가 되지 않도록 촬영해주세요.
  어두운 바닥에서 촬영하면 잘 인식됩니다.`,
  '• 복사본이나 사진은 사용할 수 없습니다.',
  '• 장애인 등록증이 없는 경우 그 외 가능한 서류로 인증 가능합니다.',
];

interface DisabilityCertificatePageProps
  extends NativeStackScreenProps<SignUpStackParamList, 'DisabilityCertificatePage'> {}

const DisabilityCertificatePage = ({ navigation, route }: DisabilityCertificatePageProps) => {
  const postAuthDisabled = usePostAuthDisabled();
  const { loginId, password } = route.params.loginInfo;

  const [bottomSheetMenuVisible, setBottomSheetMenuVisible] = useState<boolean>(false);

  const openBottomSheetMenu = () => {
    setBottomSheetMenuVisible(true);
  };

  const handleAuthDisabled = useCallback(
    (image: any) => {
      postAuthDisabled.mutate(
        {
          disabledAuthReq: { username: loginId, checkPassword: password },
          multipartFile: [image.sourceURL],
        },
        {
          onSuccess: (res) => {
            Toast.show({ type: 'success', text1: '장애인 인증 정보 전송에 성공하였습니다.' });
            setBottomSheetMenuVisible(false);
          },
        },
      );
    },
    [loginId, password],
  );

  // TODO: crop size 지정 및 고도화하기
  const handleOpenGallery = useCallback(() => {
    ImagePicker.openPicker({
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      cropping: true,
      multiple: false,
    }).then((image) => {
      handleAuthDisabled(image);
    });
  }, [handleAuthDisabled]);

  const handleOpenCamera = useCallback(() => {
    ImagePicker.openCamera({
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      cropping: true,
      multiple: false,
    }).then((image) => {
      handleAuthDisabled(image);
    });
  }, [handleAuthDisabled]);

  const MENU_LIST = useMemo(() => {
    return [
      { title: '앨범에서 찾기', onPress: handleOpenGallery },
      { title: '촬영하기', onPress: handleOpenCamera },
    ];
  }, [handleOpenGallery]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="장애인 등록증 확인" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <IcnCheck width={54} height={54} />
        <Text sizeStyle="f18" weightStyle="semiBold" style={styles.mainText}>
          장애인 인증을 위해{'\n'}
          <Text sizeStyle="f18" weightStyle="semiBold" style={styles.mainColor}>
            장애인 등록증
          </Text>
          을 준비해주세요
        </Text>
        <Pressable style={styles.sampleImgBtn} onPress={openBottomSheetMenu}>
          <Image
            style={styles.sampleImg}
            source={require('@/assets/images/img_certificate_ex.png')}
          />
        </Pressable>
        <Text sizeStyle="f15" weightStyle="bold" style={styles.cautionTitle}>
          주의사항
        </Text>
        {CAUTION_LIST.map((cautionText) => (
          <Text key={cautionText} sizeStyle="f15" weightStyle="medium" style={styles.cautionText}>
            {cautionText}
          </Text>
        ))}
        <Text sizeStyle="f16" weightStyle="medium" style={styles.otherDocText}>
          <Text sizeStyle="f16" weightStyle="bold" style={styles.otherDocStrongText}>
            그 외 가능한 서류
          </Text>{' '}
          로 인증하기
        </Text>
        <View style={styles.CTABtnContainer}>
          <Button
            text="이전으로"
            priority="secondary"
            style={[styles.flex1, styles.mr26]}
            onPress={() => navigation.goBack()}
          />
          <Button text="촬영하기" style={styles.flex1} onPress={openBottomSheetMenu} />
        </View>
      </ScrollView>
      <BottomSheetMenu
        visible={bottomSheetMenuVisible}
        setVisible={setBottomSheetMenuVisible}
        menuList={MENU_LIST}
      />
    </SafeAreaView>
  );
};

export default DisabilityCertificatePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 38,
    alignItems: 'center',
  },
  mainText: {
    textAlign: 'center',
    color: THEME.STRONG_TEXT,
    marginTop: 16,
  },
  mainColor: {
    color: THEME.MAIN,
  },
  sampleImgBtn: {
    width: '100%',
    marginTop: 26,
    aspectRatio: 1.74,
  },
  sampleImg: {
    width: '100%',
    height: '100%',
  },
  cautionTitle: {
    color: THEME.REG_TEXT,
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  cautionText: {
    marginTop: 10,
    color: THEME.LIGHT_TEXT,
    alignSelf: 'flex-start',
  },
  otherDocText: {
    color: THEME.STRONG_TEXT,
    marginTop: 30,
  },
  otherDocStrongText: {
    color: THEME.MAIN,
    textDecorationLine: 'underline',
  },
  CTABtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 36,
  },
  flex1: {
    flex: 1,
  },
  mr26: {
    marginRight: 26,
  },
});
