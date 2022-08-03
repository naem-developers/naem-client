import { DISABLED_TYPE, STANDARD_DEVICE_WIDTH } from '@/constants';
import { THEME } from '@/theme';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '@components/atoms/Text';
import Tag from '@components/molecules/Tag';
import Collapsible from 'react-native-collapsible';
import SearchInputBar from './SearchInput';

interface BoardSearchBarProps {
  selectedKeyword: string | undefined;
  setSelectedKeyword: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const BoardSearchBar = ({ selectedKeyword, setSelectedKeyword }: BoardSearchBarProps) => {
  const keywords = DISABLED_TYPE;
  const [keywordsSet, setKeywordsSet] = useState<Array<Array<string>>>([]);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  useEffect(() => {
    calcuateTagLenth();
  }, []);

  const calcuateTagLenth = () => {
    let splitKeywords: Array<Array<string>> = [];
    let tempkeywords: Array<string> = [];
    let length = 0;
    for (let i = 0; i < keywords.length; i++) {
      const keyword = keywords[i];
      const keywordLenth = 12 * 2 + 32 + 16 * (keyword.length + 1);
      if (length + keywordLenth > STANDARD_DEVICE_WIDTH) {
        splitKeywords.push(tempkeywords);
        tempkeywords = [keyword];
        length = 0;
      } else {
        length += keywordLenth;
        tempkeywords.push(keyword);
      }
    }
    splitKeywords.push(tempkeywords);
    setKeywordsSet(splitKeywords);
  };

  const setSearchKeyword = (item: string) => {
    selectedKeyword == item ? setSelectedKeyword(undefined) : setSelectedKeyword(item);
  };

  return (
    <View style={styles.container}>
      <SearchInputBar selectedKeyword={selectedKeyword} setSelectedKeyword={setSelectedKeyword} />
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text style={styles.title} sizeStyle="f19" weightStyle="bold">
          키워드 선택
        </Text>
        <Text style={styles.subTitle} sizeStyle="f14" weightStyle="light">
          장애 유형별 키워드를 선택해 더 빠르게 글을 검색하세요
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <FlatList
          data={keywordsSet}
          scrollEnabled={false}
          renderItem={({ item }: { item: string[] }) => {
            console.log(item);
            return (
              <FlatList
                data={item}
                scrollEnabled={false}
                horizontal={true}
                renderItem={({ item }: { item: string }) => {
                  return (
                    <Tag
                      text={`#${item}`}
                      style={styles.tag}
                      selected={item == selectedKeyword}
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
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
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
  },
  searchBar: {
    marginTop: 5,
    marginBottom: 35,
  },
});
