/* istanbul ignore file */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Hook from "./useFibonacci";
export type { UseFibonacci } from "./useFibonacci";

export const useFibonacciMock = (overrides = {}): Hook.UseFibonacci => {
  const mockHook = {
    fibonacci: jest.fn(),
    ...overrides,
  };

  jest.spyOn(Hook, "useFibonacci").mockImplementation(() => mockHook);
  return mockHook;
};
