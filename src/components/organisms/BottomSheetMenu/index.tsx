import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { StyleSheet, Modal as RNModal, Pressable, View } from 'react-native';
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
            <React.Fragment key={`${menuItem.title}-${menuIndex}`}>
              <Pressable
                style={[
                  styles.itemContainer,
                  menuIndex === length - 1 && { paddingBottom: insets.bottom + 24 },
                ]}
                onPress={menuItem.onPress}
              >
                <Text sizeStyle="f17" weightStyle="semiBold" style={styles.strongTextColor}>
                  {menuItem.title}
                </Text>
              </Pressable>
              {menuIndex === length - 1 || <View style={styles.divider} />}
            </React.Fragment>
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
    alignItems: 'center',
  },
  strongTextColor: {
    color: THEME.STRONG_TEXT,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: THEME.LIGHT_LINE,
  },
});
