import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Magnifying from '@assets/icons/magnifying.svg';

interface SearchInputBarProps {
  searchValue: string | undefined;
  setSearchValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SearchInputBar = ({ searchValue, setSearchValue }: SearchInputBarProps) => {
  return (
    <View style={styles.container}>
      <Magnifying />
      <TextInput
        style={styles.textInput}
        value={searchValue}
        placeholder={'검색어를 입력하세요'}
        onChangeText={(text) => setSearchValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 26,
    paddingHorizontal: 26,
    width: '100%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    height: 22,
    marginLeft: 9,
    width: '100%',
    justifyContent: 'center',
  },
});

export default SearchInputBar;
