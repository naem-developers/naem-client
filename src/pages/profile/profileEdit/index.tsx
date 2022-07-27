import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCameraColor from '@/assets/icons/icn_camera_color.svg';
import TextInput from '@/components/atoms/TextInput';
import Button from '@/components/atoms/Button';

interface ProfileEditPageProps {}

const ProfileEditPage = (props: ProfileEditPageProps) => {
  const [nickname, setNickname] = useState<string>('');

  const CompleteBtn = useCallback(() => {
    return (
      <TouchableOpacity>
        <Text sizeStyle="f18" weightStyle="semiBold" style={styles.headerCompleteBtn}>
          완료
        </Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="프로필 편집" RightComponent={<CompleteBtn />} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TouchableOpacity style={styles.profileImgContainer}>
          <Image
            style={styles.profileImg}
            source={require('@/assets/images/img_profile_photo.png')}
          />
          <View style={styles.cameraIcnContainer}>
            <IcnCameraColor width={20} height={20} />
          </View>
        </TouchableOpacity>
        <Text sizeStyle="f14" weightStyle="mediumn" style={styles.title}>
          닉네임
        </Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="10자 이내, 특수문자 불가"
            value={nickname}
            onChangeText={(text) => setNickname(text)}
          />
          <Button
            text="중복 확인"
            btnSize="small"
            style={styles.btn}
            // onPress={handleCheckDuplicateNickname}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileEditPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  headerCompleteBtn: {
    color: THEME.STRONG_TEXT,
  },
  profileImgContainer: {
    alignSelf: 'center',
  },
  profileImg: {
    width: 86,
    height: 86,
    borderRadius: 50,
    marginTop: 30,
  },
  cameraIcnContainer: {
    position: 'absolute',
    padding: 6,
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 50,
    bottom: 0,
    right: 0,
    backgroundColor: THEME.BG,
  },
  title: {
    marginTop: 32,
    color: THEME.STRONG_TEXT,
  },
  input: {
    flexShrink: 1,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    borderRadius: 10,
    marginLeft: 12,
    paddingTop: 14,
    paddingBottom: 14,
  },
});
