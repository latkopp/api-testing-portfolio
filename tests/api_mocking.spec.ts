import { test, expect } from '@playwright/test';

test.describe('API Interception & Mocking Strategies', () => {

  test('Mock API response to test UI behavior on server error (HTTP 500)', async ({ page }) => {
    // Przechwytujemy zapytanie do API i sztucznie zwracamy błąd 500
    await page.route('**/api/v1/products*', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Internal Server Error - Simulated by Playwright' }),
      });
    });

    // Wykonujemy zapytanie z poziomu przeglądarki
    const response = await page.request.get('https://api.escuelajs.co/api/v1/products');
    
    expect(response.status()).toBe(500);
    const body = await response.json();
    expect(body.message).toContain('Simulated by Playwright');
  });

  test('Mock API payload with custom test data', async ({ page }) => {
    const mockProducts = [
      { id: 999, title: 'Mocked Portfolio Product', price: 123 }
    ];

    // Przechwytujemy zapytanie i zwracamy zmockowaną listę produktów
    await page.route('**/api/v1/products?limit=1', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockProducts),
      });
    });

    const response = await page.request.get('https://api.escuelajs.co/api/v1/products?limit=1');
    const data = await response.json();

    expect(response.status()).toBe(200);
    expect(data[0].title).toBe('Mocked Portfolio Product');
  });
});
