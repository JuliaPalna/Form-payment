import { el } from "redom";

import { checkValidInput } from "../utils/validator";

export class Input {
  constructor() {
    this.el = el("input.form__input", {
      id: "",
      name: "",
      type: "text",
      placeholder: "",
      autofocus: true,
    });
  }

  isValid() {
    return checkValidInput(this.el);
  }

  update(data) {
    const { id, name, type, autofocus, placeholder } = data;

    this.el.id = id;
    this.el.name = name;
    this.el.type = type;
    this.el.placeholder = placeholder;
    this.el.autofocus = autofocus;
  }
}
