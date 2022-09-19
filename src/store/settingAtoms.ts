import utils from '@/utils';
import EncryptedStorage from 'react-native-encrypted-storage';
import { atom, DefaultValue } from 'recoil';

interface localForageEffectProps {
  setSelf: Function;
  onSet: Function;
}

const localEncryptedForageEffect =
  (key: string) =>
  ({ setSelf, onSet }: localForageEffectProps) => {
    const loadPersisted = async () => {
      const savedValue = await EncryptedStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    };
    loadPersisted();

    onSet(async (newValue: any) => {
      if (newValue instanceof DefaultValue) {
        EncryptedStorage.removeItem(key);
      } else {
        EncryptedStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const languageState = atom<string>({
  key: 'languageState',
  default: utils.SYSTEMLANGUAGE,
  effects_UNSTABLE: [localEncryptedForageEffect('language state')],
});

export const globalState = atom({
  key: 'globalState',
  default: {
    isLogin: false,
  },
  effects_UNSTABLE: [localEncryptedForageEffect('globalState')],
});
