import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ShopPage } from "./ShopPage";

describe("ShopPage", () => {
  it("filters and sorts the catalogue", { timeout: 10000 }, async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ShopPage />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText("Search"), "bottle");
    expect(screen.getByText("Pulse Bottle")).toBeInTheDocument();
    expect(screen.queryByText("Carryall Bag")).not.toBeInTheDocument();

    await user.clear(screen.getByLabelText("Search"));
    await user.selectOptions(screen.getByLabelText("Category"), "Accessories");
    await user.selectOptions(screen.getByLabelText("Sort"), "price-desc");

    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings[0]).toHaveTextContent("Carryall Bag");
  });
});
