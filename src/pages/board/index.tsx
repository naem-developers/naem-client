import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import HotBoard from './boards/HotBoard';

interface BoardPageProps {}

const BoardPage = (props: BoardPageProps) => {
  const [index, setIndex] = useState<number>(0);

  const [routes] = useState([
    { key: 'hot', title: 'HOT 게시판' },
    { key: 'free', title: '자유 게시판' },
    { key: 'guardian', title: '보호자 게시판' },
    { key: 'rehabilitation', title: '재활치료 게시판' },
    { key: 'welfare', title: '복지혜택 게시판' },
    { key: 'together', title: '같이해요 게시판' },
  ]);

  const renderScene = SceneMap({
    hot: () => <HotBoard />,
    free: () => <></>,
    guardian: () => <></>,
    rehabilitation: () => <></>,
    welfare: () => <></>,
    together: () => <></>,
  });

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        onIndexChange={setIndex}
        renderScene={renderScene}
        overScrollMode={'always'}
        sceneContainerStyle={{ backgroundColor: '#272A31' }}
        navigationState={{
          index: index,
          routes: routes,
        }}
        renderTabBar={(props: any) => (
          <TabBar
            labelStyle={styles.labelStyle}
            tabStyle={styles.tabStyle}
            indicatorStyle={styles.indicatorStyle}
            scrollEnabled={true}
            bounces={false}
            indicatorContainerStyle={styles.indicatorContainerStyle}
            {...props}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabStyle: {
    width: 112,
  },
  labelStyle: {
    color: '#222222',
    fontSize: 15,
    lineHeight: 25,
  },
  indicatorStyle: {
    backgroundColor: '#03DBB2',
    height: 2,
  },
  indicatorContainerStyle: {
    backgroundColor: '#FFFFFF',
  },
});

export default BoardPage;
