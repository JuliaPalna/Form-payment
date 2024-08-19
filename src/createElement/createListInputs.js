import { Field } from "../components/fieldInput";
import {
  numberInput,
  dateInput,
  codeInput,
  emailInput,
} from "./creatMaskInputs";

const fieldNumber = new Field(numberInput);
const fieldCode = new Field(dateInput);
const fieldDate = new Field(codeInput);
const fieldEmail = new Field(emailInput);

fieldNumber.update({
  name: "number",
  title: "Номер карты",
});

fieldCode.update({
  name: "code",
  title: "Дата окончания срока действия",
});

fieldDate.update({ name: "date", title: "CVC/CVV" });

fieldEmail.update({ name: "email", title: "Email" });

export const listInput = [fieldNumber, fieldCode, fieldDate, fieldEmail];
