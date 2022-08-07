export const removeItemOfArray = (arr: Array<any>, item: any) => {
  let array: any[] = [];
  arr.forEach((value) => {
    if (value !== item) array.push(value);
  });
  return array;
};
