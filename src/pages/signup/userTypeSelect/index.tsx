import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UserTypeSelectPageProps {}

const UserTypeSelectPage = (props: UserTypeSelectPageProps) => {
  return (
    <View style={styles.container}>
      <Text>UserTypeSelectPage</Text>
    </View>
  );
};

export default UserTypeSelectPage;

const styles = StyleSheet.create({
  container: {},
});
