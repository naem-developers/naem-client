import * as React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';

interface LandingPageProps {}

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>LandingPage</Text>
      <Button
        title="signup page"
        onPress={() => {
          navigation.push('SignUpStackNavigator');
        }}
      />
      <Button
        title="main page"
        onPress={() => {
          navigation.push('MainTabNavigator');
        }}
      />
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {},
});
