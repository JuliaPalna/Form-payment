import { el } from "redom";

export class Field {
  constructor(children) {
    this.el = el(
      "p.form__field",
      {},

      (this.label = el("label.form__label", { innerHTML: "", for: "" })),
      (this.input = children),
      (this.error = el("p.form__error", {
        innerHTML: "",
      }))
    );

    this.el.onkeyup = () => {
      const isValid = this.input.isValid();

      if (isValid) {
        this.removeError();
      } else {
        this.addError();
      }
    };
  }

  addError() {
    this.error.innerHTML = "Введите корректное значение";
  }

  removeError() {
    this.error.innerHTML = "";
  }

  update(data) {
    const { title, name } = data;

    this.label.innerHTML = title;
    this.label.for = name;
  }
}
