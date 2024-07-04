import { UseSuffix, useSuffix } from "./useSuffix";
import { renderHook } from "@testing-library/react";

describe("useAddSuffix hook", () => {
  it("should mount without error", async () => {
    let hook: UseSuffix;

    const { result } = renderHook(() => useSuffix());
    hook = result.current;

    expect(hook).toMatchSnapshot();

    const { addSuffix } = hook;
    expect(addSuffix(1)).toBe("1st");
    expect(addSuffix(2)).toBe("2nd");
    expect(addSuffix(3)).toBe("3rd");
    expect(addSuffix(4)).toBe("4th");
    expect(addSuffix(5)).toBe("5th");
    expect(addSuffix(1000000)).toBe("1000000th");
  });
});
