import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MenuIcon from '@assets/icons/icn_menu_dot.svg';
import { Menu } from 'react-native-paper';
import { THEME } from '@/theme';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Comments, postedData } from '@/types';

const MenuButton = ({ data }: { data: postedData | Comments }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  return (
    <Menu
      visible={showMenu}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity onPress={openMenu}>
          <MenuIcon />
        </TouchableOpacity>
      }
    >
      <Menu.Item titleStyle={styles.amend} onPress={() => {}} title="수정하기" />
      <Menu.Item
        titleStyle={styles.amend}
        onPress={() => {
          closeMenu();
          navigation.navigate('Report', { data: data });
        }}
        title="신고하기"
      />
      <Menu.Item titleStyle={styles.delete} onPress={() => {}} title="삭제하기" />
    </Menu>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  amend: {
    fontSize: 17,
    lineHeight: 25,
    fontWeight: '500',
  },
  delete: {
    fontSize: 17,
    lineHeight: 25,
    fontWeight: '500',
    color: THEME.POINT,
  },
});
