import React, { useCallback, useRef, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SORT_MENU } from '@/constants';
import ChooseSortView from '@components/board/post/ChooseSortView';
import PostHeader from '@components/board/post/PostHeader';
import Post from '@components/board/post/Post';
import { postedData } from '@/types';
import ScrollTopButton from '@/components/molecules/ScrollTopButton';

interface ProstViewProps {
  postDataArray: postedData[];
  selectedKeywords: string[];
}

const PostView = ({ postDataArray, selectedKeywords }: ProstViewProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [sortValue, setSortValue] = useState<string>(SORT_MENU[0]);
  const flatListRef = useRef<FlatList>(null);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const setSortDataValue = (sort: string) => {
    setSortValue(sort);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <PostHeader sortValue={sortValue} showModal={showModal} />
      <ChooseSortView
        isVisible={visible}
        hideAction={hideModal}
        setSortDataValue={setSortDataValue}
      />
      <ScrollTopButton
        commonRef={flatListRef}
        scrollAction={() => flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })}
      />
      <FlatList
        data={postDataArray}
        ref={flatListRef}
        contentInset={{ bottom: 200 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: postedData }) => {
          return <Post postedData={item} selectedKeywords={selectedKeywords} />;
        }}
      />
    </View>
  );
};

export default PostView;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  indicatorStyle: {
    backgroundColor: '#03DBB2',
    height: 2,
  },
  upScrollButton: {
    width: 41,
    height: 41,
    borderRadius: 50,
    right: 16,
    bottom: 100,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03DBB2',
    position: 'absolute',
  },
});
