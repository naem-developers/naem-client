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
      <Swiper
        style={styles.wrapper}
        loop={true}
        activeDotColor={THEME.MAIN}
        showsPagination={false}
      >
        {tempBlurb.map((item) => {
          return (
            <View style={styles.slide1}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default BlurbView;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: STANDARD_DEVICE_HEIGHT / 4,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
