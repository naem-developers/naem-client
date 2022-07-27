import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import React, { useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnCameraColor from '@/assets/icons/icn_camera_color.svg';

interface ProfileEditPageProps {}

const ProfileEditPage = (props: ProfileEditPageProps) => {
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
});
