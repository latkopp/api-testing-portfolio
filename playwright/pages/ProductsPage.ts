import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly pageHeader: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = page.locator('h1.post-title');
    this.logoutButton = page.locator('a:has-text("Log out")');
  }

  async verifyPageLoaded() {
    await expect(this.pageHeader).toBeVisible();
    await expect(this.pageHeader).toHaveText('Logged In Successfully');
  }

  async logout() {
    await this.logoutButton.click();
  }
}  
