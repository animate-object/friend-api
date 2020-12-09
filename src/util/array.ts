const sample = <T = any>(collection: Array<T>): T => {
  return collection[Math.floor(Math.random() * collection.length)];
};

type WeightedSampleAcc<T> = { breakpointSearch: number; choice: T | undefined };
const weightedSample = <T = any>(collection: Array<[T, number]>): T => {
  const sum = collection.reduce(
    (runningSum, [_, next]) => runningSum + next,
    0
  );
  const breakpoint = Math.floor(Math.random() * sum);
  const { choice } = collection.reduce(
    (
      acc: WeightedSampleAcc<T>,
      [nextChoice, weight]: [T, number]
    ): WeightedSampleAcc<T> =>
      acc.breakpointSearch > breakpoint
        ? acc
        : {
            choice: nextChoice,
            breakpointSearch: acc.breakpointSearch + weight,
          },
    { choice: undefined, breakpointSearch: 0 }
  );
  return choice!;
};

const shuffled = <T = any>(unshuffled: Array<T>): Array<T> =>
  unshuffled
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

const times = (n: number) => new Array(n).fill(undefined);

export default {
  sample,
  shuffled,
  times,
  weightedSample,
};
