import { describe, expect, it } from "vitest";
import { formatNaira, formatSamplePrice } from "./money";

describe("money formatting", () => {
  it("formats Nigerian naira", () => {
    expect(formatNaira(25000)).toContain("25,000");
  });

  it("shows the fallback for enquiry-only prices", () => {
    expect(formatSamplePrice(null)).toBe("Enquiry only");
  });
});
