import axios from 'axios';
// @ts-ignore
import { API_URL } from 'react-native-dotenv';
import {
  IReqCheckId,
  IReqPatchMemberProfile,
  IReqCheckNickname,
  IReqSignIn,
  IReqSignUp,
  IReqPostRegenerateToken,
} from './types/request';

export const client = axios.create({ baseURL: API_URL });

client.interceptors.response.use(
  (response) => {},
  async (error) => {
    console.log({ error });
  },
);

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
  postRegenerateToken(body: IReqPostRegenerateToken) {
    return client.post('/auth/regenerateToken', body);
  },
  getMemberProfile() {
    return client.get('/member/profile');
  },
  patchMemberProfile(body: IReqPatchMemberProfile) {
    return client.patch('/member', body);
  },
  deleteMember() {
    return client.delete('/member');
  },
};

export default API;
