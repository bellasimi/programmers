import {
  NAME_REGEX,
  NICKNAME_REGEX,
  EMAIL_REGEX,
  NAME_INPUT_MESSAGE,
  NICKNAME_INPUT_MESSAGE,
  EMAIL_INPUT_MESSAGE,
} from "./constants.js";

export const validateForm = (id, value) => {
  switch (id) {
    case "name":
      if (!NAME_REGEX.test(value)) {
        return NAME_INPUT_MESSAGE;
      }
      break;
    case "nickName":
      if (!NICKNAME_REGEX.test(value)) {
        return NICKNAME_INPUT_MESSAGE;
      }
      break;
    case "email":
      if (!EMAIL_REGEX.test(value)) {
        return EMAIL_INPUT_MESSAGE;
      }
      break;
  }
};
