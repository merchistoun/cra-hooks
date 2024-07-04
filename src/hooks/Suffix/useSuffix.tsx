export interface UseSuffix {
  addSuffix: (value: number) => string;
}

export const useSuffix = (): UseSuffix => {
  const addSuffix = (value: number): string => {
    switch (value % 10) {
      case 1:
        return `${value}st`;
      case 2:
        return `${value}nd`;
      case 3:
        return `${value}rd`;
      default:
        return `${value}th`;
    }
  };

  return { addSuffix };
};
