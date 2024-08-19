import IMask from "imask";

export const maskOptionsNumber = {
  mask: "0000 0000 0000 0000",
};

export const maskOptionsDate = {
  mask: "m/y",
  autofix: true,
  blocks: {
    m: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 12,
      minLength: 2,
      maxLength: 2,
    },
    y: { mask: IMask.MaskedRange, from: 0, to: 99, minLength: 2, maxLength: 2 },
  },
};

export const maskOptionsCode = {
  mask: /^[\d]{1,3}$/,
  min: 100,
  max: 999,
  maxLength: 3,
  autofix: true,
};

export const maskOptionsEmail = {
  mask: function (value) {
    //запрет на ввод точки первым символом
    if (/^[.]+$/.test(value)) return false;
    if (/^[a-z0-9_\.-]+$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
      return true;
    return false;
  },
};
