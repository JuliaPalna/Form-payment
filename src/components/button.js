import { el } from "redom";

export class Button {
  constructor() {
    this.el = el("button", {
      className: "button",
      disabled: true,
      type: "submit",
      innerHTML: "Отправить",
    });
  }

  hide() {
    this.el.disabled = true;
    this.el.className = "button";
  }

  show() {
    this.el.disabled = false;
    this.el.className = "button button--active";
  }

  update(data) {
    this.el.type = data.type;
    this.el.disabled = data.disabled;
    this.el.innerHTML = data.name;
  }
}
