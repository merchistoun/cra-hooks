import { render } from "@testing-library/react";
import { Item } from "./Item";

const mockProps = (overrides = {}) => {
  return {
    value: "TEST",
    ...overrides,
  };
};

describe("Item component", () => {
  it("should mount without error", async () => {
    const { value } = mockProps();

    const { asFragment } = render(<Item value={value} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
