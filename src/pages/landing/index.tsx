import React, { useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import Text from '../../components/atoms/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';

interface LandingPageProps extends NativeStackScreenProps<RootStackParamList, 'landing'> {}

const LandingPage = ({ navigation }: LandingPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LandingPage</Text>
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
