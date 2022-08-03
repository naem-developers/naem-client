import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SORT_MENU } from '@/constants';
import ChooseSortView from '@components/board/post/ChooseSortView';
import PostHeader from '@components/board/post/PostHeader';
import Post from '@components/board/post/Post';
import { postedData } from '@/types';

interface ProstViewProps {
  postDataArray: postedData[];
  selectedKeywords: string[];
}

const PostView = ({ postDataArray, selectedKeywords }: ProstViewProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [sortValue, setSortValue] = useState<string>(SORT_MENU[0]);
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
      <FlatList
        data={postDataArray}
        keyExtractor={(item) => item.id}
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
});
