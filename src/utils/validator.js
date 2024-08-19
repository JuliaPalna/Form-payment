const valid = require("card-validator");
const validator = require("email-validator");

export const checkValidInput = (element) => {
  let isValid;
  const value = element.value;

  switch (element.id) {
    case "number":
      isValid = isValidNumber(value);
      break;
    case "date":
      isValid = isValidDate(value);
      break;
    case "cvc":
      isValid = isValidCode(value);
      break;
    case "email":
      isValid = isValidEmail(value);
      break;
    default:
      isValid = false;
      break;
  }

  return isValid;
};

const isValidNumber = (value) => {
  return valid.number(value).isValid;
};

const isValidDate = (value) => {
  return valid.expirationDate(value).isValid;
};

const isValidCode = (value) => {
  return valid.cvv(value).isValid;
};

const isValidEmail = (value) => {
  return validator.validate(value);
};
