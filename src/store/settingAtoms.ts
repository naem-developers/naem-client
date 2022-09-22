import { SYSTEMLANGUAGE } from '@/constants';
import EncryptedStorage from 'react-native-encrypted-storage';
import { atom, AtomEffect, DefaultValue } from 'recoil';

interface localForageEffectProps {
  setSelf: Function;
  onSet: Function;
}

// const localEncryptedForageEffect =
//   (key: string) =>
//   ({ setSelf, onSet }: localForageEffectProps) => {
//     const loadPersisted = async () => {
//       const savedValue = await EncryptedStorage.getItem(key);
//       if (savedValue != null) {
//         setSelf(JSON.parse(savedValue));
//       }
//     };
//     loadPersisted();

//     onSet((newValue: any) => {
//       if (newValue instanceof DefaultValue) {
//         EncryptedStorage.removeItem(key);
//       } else {
//         EncryptedStorage.setItem(key, JSON.stringify(newValue));
//       }
//     });
//   };

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

export const languageState = atom<string>({
  key: 'languageState',
  default: SYSTEMLANGUAGE,
  effects_UNSTABLE: [persistAtom],
});

export const globalState = atom({
  key: 'globalState',
  default: {
    isLogin: undefined,
  },
  effects_UNSTABLE: [persistAtom],
});
