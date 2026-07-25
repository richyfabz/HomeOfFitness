import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MembershipPage } from "./MembershipPage";

describe("MembershipPage", () => {
  it("renders the plan cards and comparison", () => {
    render(
      <MemoryRouter>
        <MembershipPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Foundation" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Performance" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Elite" })).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Prepare enquiry" }),
    ).toBeInTheDocument();
  });
});
