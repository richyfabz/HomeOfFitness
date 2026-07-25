import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "@playwright/test";

async function capture(
  page: Parameters<typeof test>[1]["page"],
  route: string,
  filePath: string,
  viewport: { width: number; height: number },
) {
  mkdirSync(dirname(filePath), { recursive: true });
  await page.setViewportSize(viewport);
  await page.goto(route);
  await page.screenshot({ path: filePath, fullPage: true });
}

test("capture route screenshots", async ({ page }) => {
  await capture(page, "/", join("docs", "screenshots", "home", "375.png"), {
    width: 375,
    height: 812,
  });
  await capture(page, "/", join("docs", "screenshots", "home", "1440.png"), {
    width: 1440,
    height: 1200,
  });
  await capture(
    page,
    "/membership",
    join("docs", "screenshots", "membership", "1440.png"),
    {
      width: 1440,
      height: 1200,
    },
  );
  await capture(
    page,
    "/shop",
    join("docs", "screenshots", "shop", "1440.png"),
    {
      width: 1440,
      height: 1200,
    },
  );
  await capture(
    page,
    "/shop/atlas-training-tee",
    join("docs", "screenshots", "shop", "product-1440.png"),
    { width: 1440, height: 1400 },
  );
});
