import { el } from "redom";
import { Button } from "./button";

import { findIndexElement } from "../utils/findIndexElement";
import { getNextIndex } from "../utils/getNextIndex";
import { checkNavigationKey } from "../utils/checkNavigationKey";

export class Form {
  constructor(children) {
    this.el = el(
      "form.form",
      {
        name: "paymentForm",
        action: "",
        method: "get",
        id: "form",
        onsubmit: "return false",
      },

      el("h1.form__title", "Form payment"),
      (this.fieldset = el(
        "fieldset.form__fieldset",
        {},
        (this.listInputs = children),
        (this.button = new Button())
      ))
    );

    this.changeVisibelButton();
    this.navigationKeyboard();
  }

  changeVisibelButton() {
    this.listInputs.forEach((el) => {
      el.input.el.onblur = () => {
        const isValid = this.listInputs.every((el) => {
          return el.input.isValid();
        });

        if (isValid) {
          this.button.show();
        } else {
          this.button.hide();
        }
      };
    });
  }

  navigationKeyboard() {
    this.el.onkeyup = (e) => {
      const isNavigation = checkNavigationKey(e.key);
      if (!isNavigation) return;

      const indexActivElement = findIndexElement({
        array: this.el,
        element: e.target,
      });

      const nexElement = getNextIndex({
        key: e.key,
        index: indexActivElement,
        length: this.el.length,
      });

      this.el[nexElement].focus();
    };
  }

  update() {}
}
