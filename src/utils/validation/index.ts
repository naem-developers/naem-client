const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const regId = /^(?=.*[a-z])([a-z0-9]+)$/;
const regPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const regNickname = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

export const validatePhoneNum = (phoneNum: string): string => {
  let validationMsg = '';
  if (phoneNum.length === 0) {
    validationMsg = '휴대폰 번호를 입력해 주세요.';
  } else if (!regPhone.test(phoneNum)) {
    validationMsg = '휴대폰 번호 형식이 올바르지 않습니다.';
  } else {
    validationMsg = '';
  }
  return validationMsg;
};

export const validateId = (id: string): string => {
  let validationMsg = '';
  if (id.length === 0) {
    validationMsg = '아이디를 입력해 주세요.';
  } else if (!regId.test(id)) {
    validationMsg = '5~20자의 영문 소문자와 숫자만 가능합니다.';
  } else {
    validationMsg = '';
  }
  return validationMsg;
};

export const validatePw = (pw: string): string => {
  let validationMsg = '';
  if (pw.length === 0) {
    validationMsg = '비밀번호를 입력해 주세요.';
  } else if (!regPw.test(pw)) {
    validationMsg = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
  } else {
    validationMsg = '';
  }
  return validationMsg;
};

export const validateNickname = (nickname: string): string => {
  let validationMsg = '';
  if (nickname.length === 0) {
    validationMsg = '닉네임을 입력해 주세요.';
  } else if (!regNickname.test(nickname)) {
    validationMsg = '10자 이내의 한글, 영문, 숫자를 사용하세요.';
  } else {
    validationMsg = '';
  }
  return validationMsg;
};
