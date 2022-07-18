const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

export const validatePhoneNum = (phoneNum: string): string => {
  let validationMsg = '';
  if (phoneNum?.length) {
    validationMsg = '휴대폰 번호를 입력해 주세요.';
  } else if (regPhone.test(phoneNum) === true) {
    validationMsg = '휴대폰 번호 형식이 올바르지 않습니다.';
  } else {
    validationMsg = '';
  }
};
