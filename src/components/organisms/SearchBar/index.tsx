import { THEME } from '@/theme';
import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  PressableProps,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import IcnMagnifier from '@/assets/icons/icn_magnifier.svg';
import IcnMic from '@/assets/icons/icn_mic.svg';

interface SearchBarProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
}

const SearchBar = ({ style, ...props }: SearchBarProps) => {
  return (
    <Pressable style={[styles.container, style]} {...props}>
      <TouchableOpacity>
        <IcnMagnifier width={24} height={24} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        placeholderTextColor="#c2c2c2"
      />
      <TouchableOpacity>
        <IcnMic width={24} height={24} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 13,
    paddingVertical: 12,
    backgroundColor: THEME.BG,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});
