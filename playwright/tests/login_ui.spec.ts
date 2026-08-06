import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('E-Commerce UI Login Tests (POM)', () => {

  test('User should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('student', 'Password123');
    await productsPage.verifyPageLoaded();
  });

  test('User should see error message with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('incorrectUser', 'Password123');
    await loginPage.verifyErrorMessage('Your username is invalid!');
  });
});
