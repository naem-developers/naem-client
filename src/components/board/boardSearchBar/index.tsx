import { DISABLED_TYPE, H_PADDING, STANDARD_DEVICE_WIDTH } from '@/constants';
import { THEME } from '@/theme';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '@components/atoms/Text';
import Tag from '@components/molecules/Tag';
import Collapsible from 'react-native-collapsible';
import SearchInputBar from './SearchInput';
import { removeItemOfArray } from '@/utils/array';
import UpArrow from '@assets/icons/icn_arrow_up.svg';

interface BoardSearchBarProps {
  selectedKeywords: string[];
  setSelectedKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  searchValue: string | undefined;
  setSearchValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const BoardSearchBar = ({
  selectedKeywords,
  searchValue,
  setSelectedKeywords,
  setSearchValue,
}: BoardSearchBarProps) => {
  const keywords = DISABLED_TYPE;
  const [keywordsSet, setKeywordsSet] = useState<Array<Array<string>>>([]);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  useEffect(() => {
    calcurateTagLenth();
  }, []);

  const calcurateTagLenth = () => {
    let splitKeywords: Array<Array<string>> = [];
    let tempkeywords: Array<string> = [];
    let length = 0;
    keywords.forEach((keyword: string) => {
      const keywordLenth = 12 * 2 + 32 + 16 * (keyword.length + 1);
      if (length + keywordLenth > STANDARD_DEVICE_WIDTH) {
        splitKeywords.push(tempkeywords);
        tempkeywords = [keyword];
        length = 0;
      } else {
        length += keywordLenth;
        tempkeywords.push(keyword);
      }
    });
    splitKeywords.push(tempkeywords);
    setKeywordsSet(splitKeywords);
  };

  const setSearchKeyword = useCallback(
    (item: string) => {
      if (selectedKeywords?.includes(item))
        setSelectedKeywords(removeItemOfArray(selectedKeywords, item));
      else setSelectedKeywords([...selectedKeywords, item]);
    },
    [selectedKeywords],
  );

  return (
    <View style={styles.container}>
      <SearchInputBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <View style={styles.header}>
          <Text style={styles.title} sizeStyle="f19" weightStyle="bold">
            키워드 선택
          </Text>
          <UpArrow />
        </View>
        <Text style={styles.subTitle} sizeStyle="f14" weightStyle="light">
          장애 유형별 키워드를 선택해 더 빠르게 글을 검색하세요
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <FlatList
          data={keywordsSet}
          keyExtractor={(index) => index.toString()}
          scrollEnabled={false}
          renderItem={({ item }: { item: string[] }) => {
            return (
              <FlatList
                data={item}
                scrollEnabled={false}
                horizontal={true}
                keyExtractor={(item) => item}
                renderItem={({ item }: { item: string }) => {
                  return (
                    <Tag
                      text={`#${item}`}
                      style={styles.tag}
                      selected={selectedKeywords?.includes(item)}
                      onPress={() => setSearchKeyword(item)}
                    />
                  );
                }}
              />
            );
          }}
        />
      </Collapsible>
    </View>
  );
};

export default BoardSearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BG,
    paddingBottom: H_PADDING,
    paddingHorizontal: 16,
  },
  tag: {
    marginRight: 12,
    marginVertical: 8,
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
  searchBar: {
    marginTop: 5,
    marginBottom: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
