import IMask from "imask";
import { Input } from "../components/input";
import {
  maskOptionsNumber,
  maskOptionsDate,
  maskOptionsEmail,
  maskOptionsCode,
} from "../utils/mask";

const numberInput = new Input();
const dateInput = new Input();
const codeInput = new Input();
const emailInput = new Input();

numberInput.update({
  id: "number",
  name: "number",
  placeholder: "0000 0000 0000 0000",
  type: "text",
  autofocus: true,
});

dateInput.update({
  id: "date",
  name: "date",
  placeholder: "MM/YY",
  type: "text",
});

codeInput.update({
  id: "cvc",
  name: "code",
  placeholder: "***",
  type: "text",
});

emailInput.update({
  id: "email",
  type: "email",
  name: "email",
  placeholder: " ",
});

const maskNumber = new IMask(numberInput.el, maskOptionsNumber);
const maskDate = new IMask(dateInput.el, maskOptionsDate);
const maskCode = new IMask(codeInput.el, maskOptionsCode);
const maskEmail = new IMask(emailInput.el, maskOptionsEmail);

export { numberInput, dateInput, codeInput, emailInput };
