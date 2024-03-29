import Text from '@/components/atoms/Text';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SORT_MENU, WINDOW_WIDTH } from '@/constants';
import Modal from 'react-native-modal';

const ChooseSortView = ({
  isVisible,
  hideAction,
  setSortDataValue,
}: {
  isVisible: boolean;
  hideAction: () => void;
  setSortDataValue: (sort: string) => void;
}) => {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onDismiss={hideAction}
        onBackdropPress={hideAction}
        style={styles.modal}
      >
        <View style={styles.selectView}>
          <FlatList
            data={SORT_MENU}
            renderItem={({ item, index }: { item: string; index: number }) => {
              return (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setSortDataValue(item);
                  }}
                >
                  <Text sizeStyle="f16" weightStyle="regular">
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ChooseSortView;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  selectView: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    width: WINDOW_WIDTH,
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
