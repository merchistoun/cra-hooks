/* istanbul ignore file */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Hook from "./useSuffix";
export type { UseSuffix } from "./useSuffix";

export const useSuffixMock = (overrides = {}): Hook.UseSuffix => {
  const mockHook = {
    addSuffix: jest.fn().mockImplementation((i) => `${i}-mock`),
    ...overrides,
  };

  jest.spyOn(Hook, "useSuffix").mockImplementation(() => mockHook);
  return mockHook;
};
