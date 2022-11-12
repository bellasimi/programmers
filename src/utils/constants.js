export const NAME_REGEX = "[ㄱ-ㅎ가-힣]{2,4}";
export const NICKNAME_REGEX = "[a-zA-Z]{3,10}";
export const EMAIL_REGEX = "([a-zA-Z0-9]+)@(grepp.co)";

export const NAME_INPUT_MESSAGE = "2~4 글자의 한글만 입력이 가능합니다.";
export const NICKNAME_INPUT_MESSAGE =
  "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다.";
export const EMAIL_INPUT_MESSAGE =
  "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다.";
