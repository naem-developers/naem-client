import React, { useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import Text from '../../components/atoms/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import useFetchRoot from '@/hooks/api/root/useFetchRoot';

interface LandingPageProps extends NativeStackScreenProps<RootStackParamList, 'landing'> {}

const LandingPage = ({ navigation }: LandingPageProps) => {
  // 랜딩 페이지에서 예시로 fetch
  // 나중에 다른 api 추가되면 삭제 예정
  const { isLoading, data } = useFetchRoot();

  useEffect(() => {
    console.log(data, isLoading);
  }, [isLoading]);

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
