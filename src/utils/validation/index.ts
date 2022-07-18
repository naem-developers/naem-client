const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const regId = /^(?=.*[a-z])([a-z0-9]+)$/;

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
