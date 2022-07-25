import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet, Modal as RNModal, Pressable, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface BottomSheetMenuProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuList: Array<{ title: string; onPress: () => void }>;
}

const BottomSheetMenu = ({ visible, setVisible, menuList }: BottomSheetMenuProps) => {
  const insets = useSafeAreaInsets();
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Pressable style={styles.modalContainer} onPress={() => setVisible(false)}>
        {menuList.map((menuItem, menuIndex, { length }) => {
          return (
            <Pressable
              key={`${menuItem.title}-${menuIndex}`}
              style={[
                styles.itemContainer,
                menuIndex === length - 1 && { paddingBottom: insets.bottom },
              ]}
              onPress={menuItem.onPress}
            >
              <Text>{menuItem.title}</Text>
            </Pressable>
          );
        })}
      </Pressable>
    </RNModal>
  );
};

export default BottomSheetMenu;

const styles = StyleSheet.create({
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemContainer: {
    width: '100%',
    backgroundColor: THEME.BG,
    padding: 24,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
