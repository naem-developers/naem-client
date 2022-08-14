import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import useInterval from 'use-interval';
import Swiper from 'react-native-swiper';
import Text from '@components/atoms/Text';
import { STANDARD_DEVICE_HEIGHT } from '@/constants';
import { THEME } from '@/theme';

const tempBlurb = ['url 1', 'url 2', 'url 3', 'url 4', 'url 5', 'url 6'];

const BlurbView = () => {
  const [index, setIndex] = React.useState<number>(0);

  return (
    <View>
      <View style={styles.container}>
        <Text sizeStyle="f19" weightStyle="semi-bold">
          이벤트
        </Text>
        <Text sizeStyle="f14" weightStyle="medium" style={styles.subText}>
          나음이 준비한 더 나은 이벤트!
        </Text>
      </View>
      <Swiper
        style={styles.wrapper}
        loop={true}
        activeDotColor={THEME.MAIN}
        showsPagination={false}
      >
        {tempBlurb.map((item) => {
          return (
            <View style={styles.slide}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default BlurbView;

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: STANDARD_DEVICE_HEIGHT / 4,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  subText: {
    color: THEME.REG_TEXT,
  },
});
