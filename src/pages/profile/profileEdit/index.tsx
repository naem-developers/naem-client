import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ProfileEditPageProps {}

const ProfileEditPage = (props: ProfileEditPageProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfileEditPage</Text>
    </View>
  );
};

export default ProfileEditPage;

const styles = StyleSheet.create({
  container: {},
});
