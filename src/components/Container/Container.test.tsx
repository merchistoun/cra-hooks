import { render } from "@testing-library/react";
import { Container } from "./Container";
import { useFibonacciMock as mockUseFibonacci } from "../../hooks/Fibonacci/useFibonacci.mock";

const mockDependencies = (overrides = {}) => {
  return {
    useFibonacci: mockUseFibonacci(overrides),
    ...overrides,
  };
};

describe("Test component", () => {
  it("should mount without error", async () => {
    const { useFibonacci } = mockDependencies({
      fibonacci: jest
        .fn()
        .mockImplementation(() => ["mock-result-1", "mock-result-2"]),
    });

    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();

    expect(useFibonacci.fibonacci).toBeCalledTimes(1);
    expect(useFibonacci.fibonacci).toBeCalledWith(50);
  });
});
