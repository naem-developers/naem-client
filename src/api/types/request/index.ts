// request type을 정의하는 파일입니다.

export interface IReqSignUp {
  memberType: 'IN_PERSON' | 'PROTECTOR';
  nickname: string;
  password: string;
  phoneNumber: string;
  username: string;
}

export interface IReqSignIn extends Pick<IReqSignUp, 'username' | 'password'> {}

export interface IReqCheckId {
  username: string;
}

export interface IReqCheckNickname {
  nickname: string;
}
