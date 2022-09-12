import { client } from '@/api';

export const applyToken = (jwt: string) => {
  client.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};

export const clearToken = () => {
  delete client.defaults.headers.common['Authorization'];
};
