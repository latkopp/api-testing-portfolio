import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('Strona główna powinna pasować do wzorca wizualnego', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    // Porównanie ze wzorcem obrazu
    await expect(page).toHaveScreenshot('homepage-baseline.png', {
      maxDiffPixels: 100,
    });
  });
});