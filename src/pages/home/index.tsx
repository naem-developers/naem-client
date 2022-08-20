import Text from '@/components/atoms/Text';
import BlurbView from '@/components/home/BlurbView';
import HomePostList from '@/components/home/HomePostList';
import SearchBar from '@/components/organisms/SearchBar';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HomePageProps extends NativeStackScreenProps<RootStackParamList, 'MainTabNavigator'> {}

const HomePage = ({ navigation }: HomePageProps) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={[styles.container]}>
        <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
          <SearchBar
            style={styles.searchBar}
            disabled
            onPress={() => navigation.navigate('SearchPage')}
          />
          <Image
            style={styles.catchPhrase}
            source={require('@/assets/images/img_catchphrase.png')}
          />
        </View>
      </View>
      <HomePostList />
      <BlurbView />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: THEME.BG,
  },
  headerContainer: {
    backgroundColor: THEME.MAIN,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  catchPhrase: {
    width: 205,
    height: 48,
  },
  searchBar: {
    marginTop: 5,
    marginBottom: 35,
  },
  title: {
    color: THEME.STRONG_TEXT,
  },
  subtitle: {
    color: THEME.REG_TEXT,
    marginTop: 6,
  },
  postList: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 276,
  },
});
