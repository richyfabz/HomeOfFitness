import { expect, test } from "@playwright/test";

test("home routes into membership and classes", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Home of Fitness" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Compare memberships" }).first().click();
  await expect(page).toHaveURL(/\/membership/);
  await expect(
    page.getByRole("heading", { name: "Compare memberships without guessing" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Explore the class timetable" }).click();
  await expect(page).toHaveURL(/\/classes/);
  await expect(
    page.getByRole("heading", { name: "Discover classes that scan quickly" }),
  ).toBeVisible();
});

test("shop search, product route and cart persistence work", async ({
  page,
}) => {
  await page.goto("/shop");
  await page.getByLabel("Search").fill("bottle");
  await expect(
    page.getByRole("heading", { name: "Pulse Bottle" }),
  ).toBeVisible();

  await page.goto("/shop/atlas-training-tee");
  await page.getByLabel("Size").selectOption("M");
  await page.getByLabel("Colour").selectOption("Black");
  await page.getByLabel("Quantity").fill("2");
  await page.getByRole("button", { name: "Add to cart" }).click();

  await expect(page).toHaveURL(/\/cart/);
  await expect(
    page.getByRole("heading", { name: "Atlas Training Tee" }),
  ).toBeVisible();
  await expect(page.getByText("Size: M")).toBeVisible();

  await page.reload();
  await expect(page.getByText("Atlas Training Tee")).toBeVisible();
  await expect(page.getByText("2 item(s) in the cart.")).toBeVisible();
});

test("direct loads and 404 handling work", async ({ page }) => {
  await page.goto("/membership");
  await expect(
    page.getByRole("heading", { name: "Compare memberships without guessing" }),
  ).toBeVisible();

  await page.goto("/does-not-exist");
  await expect(
    page.getByRole("heading", { name: "Page not found" }),
  ).toBeVisible();
});

test("mobile menu opens and closes with escape", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(
    page.locator("#mobile-menu").getByRole("link", { name: "Membership" }),
  ).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
});
