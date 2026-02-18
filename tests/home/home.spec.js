import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page.js";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
  });

  test("homepage should load correctly", async ({ page }) => {
    const home = new HomePage(page);
    await expect(home.heading).toBeVisible();
  });

  test("Navigate to Blog page from navbar", async ({ page }) => {
    const home = new HomePage(page);

    await home.goToBlog();
    await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
  });

  test("Navigate to Contact page from navbar", async ({ page }) => {
    const home = new HomePage(page);

    await home.goToContact();
    await page.waitForURL(/\/contact/);
    await expect(page).toHaveURL(/\/contact/);
    // await expect(
    //   page.getByRole("heading", { name: "Contact Us" }),
    // ).toBeVisible();
  });

  test("Navigate to Bank page from navbar", async ({ page }) => {
    const home = new HomePage(page);

    await home.goToBank();

    await page.waitForURL(/\/bank/);
    await expect(page).toHaveURL(/\/bank/);
  });

  test("Navigate to Practice page from navbar", async ({ page }) => {
    const home = new HomePage(page);

    await home.goToPractice();

    await page.waitForURL(/\/practice/);
    await expect(page).toHaveURL(/\/practice/);
    // await expect(page.getByRole("heading", { name: "Practice" })).toBeVisible();
  });
});
