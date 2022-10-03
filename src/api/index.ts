import axios from 'axios';
// @ts-ignore
import { API_URL } from 'react-native-dotenv';
import { IReqAuthDisabled, IReqCheckId, IReqSignIn, IReqSignUp } from './types/request';

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
    return client.get('/auth/checkid', { params });
  },
  getMemberProfile() {
    return client.get('/member/profile');
  },
  postAuthDisabled(body: IReqAuthDisabled) {
    return client.post('/auth/disabled', body);
  },
};

export default API;
