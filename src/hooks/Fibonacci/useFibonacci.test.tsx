import { UseFibonacci, useFibonacci } from "./useFibonacci";
import { useSuffixMock as mockUseSuffix } from "../Suffix/useSuffix.mock";
import { renderHook } from "@testing-library/react";
import { it, describe, expect } from "@jest/globals";

afterEach(() => {
  jest.clearAllMocks();
});

beforeEach(() => {
  jest.clearAllMocks();
});

const mockDependencies = (overrides = {}) => {
  return {
    useSuffix: mockUseSuffix(overrides),
    ...overrides,
  };
};

describe("useFibonacci hook", () => {
  it("should mount without error", async () => {
    const { useSuffix } = mockDependencies({
      addSuffix: jest.fn().mockImplementation((i) => `${i}`),
    });

    let hook: UseFibonacci;
    const { result } = renderHook(() => useFibonacci());
    hook = result.current;
    expect(hook).toMatchSnapshot();

    const { fibonacci } = hook;

    expect(fibonacci(5)).toEqual(["1", "1", "2", "3", "5"]);
    expect(useSuffix.addSuffix).toBeCalledTimes(5);
  });
});
