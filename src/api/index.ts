import axios from 'axios';
// @ts-ignore
import { API_URL } from 'react-native-dotenv';
import { IReqCheckId, IReqCheckNickname, IReqSignIn, IReqSignUp } from './types/request';

export const client = axios.create({ baseURL: API_URL });

/** api 정의가 이뤄지는 곳입니다. */
const API = {
  postSignUp(body: IReqSignUp) {
    return client.post('/auth/signUp', body);
  },
  postSignIn(body: IReqSignIn) {
    return client.post('/auth/signIn', body);
  },
  getCheckId(params: IReqCheckId) {
    return client.get('/auth/check/username', { params });
  },
  getCheckNickname(params: IReqCheckNickname) {
    return client.get('/auth/check/nickname', { params });
  },
  getMemberProfile() {
    return client.get('/member/profile');
  },
};

export default API;
