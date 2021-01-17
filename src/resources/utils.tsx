export const calcDist = (a: [number, number], b: [number, number]): number =>
  Number(
    Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)).toFixed(2),
  );
