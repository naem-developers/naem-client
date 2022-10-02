import { SYSTEMLANGUAGE } from '@/constants';
import EncryptedStorage from 'react-native-encrypted-storage';
import { atom, AtomEffect, DefaultValue } from 'recoil';

const persistAtom: AtomEffect<any> = ({ node, setSelf, onSet }) => {
  setSelf(
    EncryptedStorage.getItem(node.key).then((savedValue) =>
      savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
    ),
  );

  onSet((newValue) => {
    if (newValue instanceof DefaultValue) {
      EncryptedStorage.removeItem(node.key);
    } else {
      EncryptedStorage.setItem(node.key, JSON.stringify(newValue));
    }
  });
};

//stored
export const languageState = atom<string>({
  key: 'languageState',
  default: SYSTEMLANGUAGE,
  effects_UNSTABLE: [persistAtom],
});

export const globalState = atom({
  key: 'globalState',
  default: {
    isLogin: undefined,
    userId: '',
  },
  effects_UNSTABLE: [persistAtom],
});

//memory
