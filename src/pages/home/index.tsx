import Text from '@/components/atoms/Text';
import BlurbView from '@/components/home/BlurbView';
import HomePostList from '@/components/home/HomePostList';
import ScrollTopButton from '@/components/molecules/ScrollTopButton';
import SearchBar from '@/components/organisms/SearchBar';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Collapsible from 'react-native-collapsible';

interface HomePageProps extends NativeStackScreenProps<RootStackParamList, 'MainTabNavigator'> {}

const HomePage = ({ navigation }: HomePageProps) => {
  const insets = useSafeAreaInsets();
  const scrollRef = React.useRef<ScrollView>(null);
  const [visible, setVisible] = React.useState<boolean>(true);
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <Collapsible collapsed={!visible}>
          <SearchBar
            style={styles.searchBar}
            disabled
            onPress={() => navigation.navigate('SearchPage')}
          />
        </Collapsible>
      </View>
      <ScrollTopButton
        commonRef={scrollRef}
        scrollAction={() => scrollRef.current?.scrollTo({ y: 0 })}
        marginBottom={50}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
        bounces={false}
        onScroll={(scroll) => {
          if (scroll.nativeEvent.contentOffset.y > 0) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }}
        ref={scrollRef}
      >
        <View style={styles.imageComp}>
          <Image
            style={styles.catchPhrase}
            source={require('@/assets/images/img_catchphrase.png')}
          />
        </View>
        <HomePostList />
        <BlurbView />
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BG,
  },
  scroll: {
    paddingBottom: 250,
  },
  headerContainer: {
    backgroundColor: THEME.MAIN,
    paddingHorizontal: 16,
  },
  catchPhrase: {
    width: 205,
    height: 48,
  },
  imageComp: {
    paddingBottom: 30,
    paddingLeft: 16,
    backgroundColor: THEME.MAIN,
    width: '100%',
    justifyContent: 'center',
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
