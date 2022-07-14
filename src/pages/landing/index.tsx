import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import Text from '../../components/atoms/Text';

interface LandingPageProps {}

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 16 }}>LandingPage</Text>
      <Button
        title="signup page"
        onPress={() => {
          navigation.navigate('LoginPage');
        }}
      />
      <Button
        title="main page"
        onPress={() => {
          navigation.navigate('MainTabNavigator');
        }}
      />
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {},
});
