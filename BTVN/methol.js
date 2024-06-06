export function findAndUpdate(numOld, arr, numNew) {
  let num = false;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === numOld) {
      arr[index] = numNew;
      num = true;
    }
  }
  return num;
}
