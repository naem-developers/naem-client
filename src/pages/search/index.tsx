import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import SearchBar from '@/components/organisms/SearchBar';
import { THEME } from '@/theme';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcnArrowLeftBlack from '@/assets/icons/icn_arrow_left_black.svg';
import { DISABLED_TYPE } from '@/constants';
import { removeItemOfArray } from '@/utils/array';
import Tag from '@/components/molecules/Tag';
import Text from '@/components/atoms/Text';
import UpArrow from '@assets/icons/icn_arrow_up.svg';

interface SearchPageProps {}

const BackButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <IcnArrowLeftBlack width={16} height={16} />
    </TouchableOpacity>
  );
};

const SearchPage = (props: SearchPageProps) => {
  const [visible, setVisible] = React.useState<boolean>(true);
  const [selectedKeywords, setSelectedKeywords] = React.useState<Array<string>>([]);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const keywords = DISABLED_TYPE;

  const setSearchKeyword = React.useCallback(
    (item: string) => {
      if (selectedKeywords?.includes(item))
        setSelectedKeywords(removeItemOfArray(selectedKeywords, item));
      else setSelectedKeywords([...selectedKeywords, item]);
    },
    [selectedKeywords],
  );
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Collapsible collapsed={!visible} style={styles.headerContainer}>
        <BackButton />
        <SearchBar
          style={styles.searchBar}
          disabled
          onPress={() => navigation.navigate('SearchPage')}
        />
      </Collapsible>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title} sizeStyle="f19" weightStyle="bold">
            키워드 선택
          </Text>
        </View>
        <Text style={styles.subTitle} sizeStyle="f14" weightStyle="light">
          장애 유형별 키워드를 선택해 더 빠르게 글을 검색하세요
        </Text>
        <View style={styles.tags}>
          {keywords.map((item) => {
            return (
              <Tag
                key={item.toString()}
                text={`#${item}`}
                style={styles.tag}
                selected={selectedKeywords?.includes(item)}
                onPress={() => setSearchKeyword(item)}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.MAIN,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: THEME.MAIN,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    marginTop: 5,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: THEME.BG,
  },
  backButton: {
    paddingLeft: 16,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 12,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: THEME.STRONG_TEXT,
    lineHeight: 22,
  },
  subTitle: {
    color: THEME.REG_TEXT,
    lineHeight: 22,
    marginTop: 6,
  },
});
