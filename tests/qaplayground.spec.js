import { test, expect } from '@playwright/test';

test('Open QA Playground homepage', async ({ page }) => {
  await page.goto('https://www.qaplayground.com/');
  await expect(page).toHaveTitle(/QA Playground/);
});
