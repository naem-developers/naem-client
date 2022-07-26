import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import React, { useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView>
      <Header title="프로필 편집" RightComponent={<CompleteBtn />} />
      <Text>123</Text>
    </SafeAreaView>
  );
};

export default ProfileEditPage;

const styles = StyleSheet.create({
  container: {},
  headerCompleteBtn: {
    color: THEME.STRONG_TEXT,
  },
});
