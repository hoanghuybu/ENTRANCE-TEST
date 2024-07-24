function rotateSparseArray(
  arr: (number | null | undefined)[],
  steps: number
): (number | null | undefined)[] {
  const len = arr.length;
  if (len === 0 || steps <= 0) return arr;

  steps = steps % len;

  const nonDefaultValues = arr.filter(
    (item) => item !== null && item !== undefined
  );

  const rotatedNonDefault = [
    ...nonDefaultValues.slice(-steps),
    ...nonDefaultValues.slice(0, -steps),
  ];

  let rotatedIndex = 0;
  return arr.map((item) => {
    if (item === null || item === undefined) {
      return item;
    } else {
      return rotatedNonDefault[rotatedIndex++];
    }
  });
}

const sparseArray = [1, null, 2, undefined, 3, null, 4];
const steps = 2;
const rotatedArray = rotateSparseArray(sparseArray, steps);
console.log(rotatedArray);
