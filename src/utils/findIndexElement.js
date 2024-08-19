export const findIndexElement = ({ array, element }) => {
  return Array.from(array).findIndex((item) => {
    return item.id === element.id;
  });
};
