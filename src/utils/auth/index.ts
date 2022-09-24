import { client } from '@/api';
import { USER_STORAGE_KEY } from '@/constants/storageKeys';
import EncryptedStorage from 'react-native-encrypted-storage';

export const applyToken = (jwt: string) => {
  client.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};

export const clearToken = () => {
  delete client.defaults.headers.common['Authorization'];
  EncryptedStorage.clear();
};
