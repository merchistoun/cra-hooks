import { useSuffix } from "../";

export interface UseFibonacci {
  fibonacci: (n: number) => string[];
}

export const useFibonacci = (): UseFibonacci => {
  const { addSuffix } = useSuffix();

  const fibonacci = (n: number): string[] => {
    const arr = new Array(n);

    for (let i = 0; i < n; i++) {
      arr[i] = i > 1 ? arr[i - 1] + arr[i - 2] : 1;
    }

    return arr.map(addSuffix);
  };
  return { fibonacci };
};
