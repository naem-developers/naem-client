import Text from '@/components/atoms/Text';
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
    <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={styles.postList}>
          <Text sizeStyle="f19" weightStyle="semiBold" style={styles.title}>
            인기 게시글
          </Text>
          <Text sizeStyle="f14" weightStyle="medium" style={styles.subtitle}>
            지금 나음에서 인기있는 게시글을 확인하세요
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { flex: 1 },
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
