import { test, expect } from "@playwright/test";

const BASE = process.env.TEST_BASE_URL ?? "http://localhost:3000";

test.describe("Email form", () => {
  test("homepage loads with hero form", async ({ page }) => {
    await page.goto(BASE);
    await expect(page.getByPlaceholder("your@company.com")).toBeVisible();
    await expect(page.getByRole("button", { name: /get the free ebook/i })).toBeVisible();
  });

  test("form requires gdpr consent", async ({ page }) => {
    await page.goto(BASE);
    await page.fill('input[type="email"]', "test@example.com");
    // Don't check the GDPR checkbox
    await page.click('button[type="submit"]');
    // Should show error, not success
    await expect(page.getByText(/consent/i)).toBeVisible();
  });

  test("blog page loads with sidebar form", async ({ page }) => {
    await page.goto(`${BASE}/blog`);
    // Click first post
    const firstCard = page.locator("article").first();
    await firstCard.click();
    // Should show sidebar form
    await expect(page.getByText(/free ebook/i).first()).toBeVisible();
  });

  test("privacy and imprint pages load", async ({ page }) => {
    await page.goto(`${BASE}/privacy`);
    await expect(page.getByText(/privacy policy/i)).toBeVisible();

    await page.goto(`${BASE}/imprint`);
    await expect(page.getByText(/imprint/i)).toBeVisible();
  });

  test("blog index page shows posts", async ({ page }) => {
    await page.goto(`${BASE}/blog`);
    const cards = page.locator("article");
    await expect(cards).toHaveCount(10);
  });
});
