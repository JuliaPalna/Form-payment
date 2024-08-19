export const getNextIndex = ({ key, index, length }) => {
  let nexIndex;

  switch (key) {
    case "ArrowLeft":
      nexIndex = getElementBefore({
        index,
        length,
      });
      break;
    case "ArrowRight":
    case "Shift":
    case "Tab":
      nexIndex = getElementAfter({
        index,
        length,
      });
      break;
    default:
      break;
  }

  return nexIndex;
};

const getElementBefore = ({ index, length }) => {
  return index === 0 ? length - 2 : index - 1;
};

const getElementAfter = ({ index, length }) => {
  return index === length - 1 ? 0 : index + 1;
};
