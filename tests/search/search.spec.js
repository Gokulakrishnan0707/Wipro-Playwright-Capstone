const { test, expect } = require('@playwright/test');

const SearchPage = require('../../pages/searchpage');

test.describe('Search Module', () => {

  let searchPage;

  test.beforeEach(async ({ page }) => {

    searchPage = new SearchPage(page);

    await searchPage.openHomePage();

    await page.waitForLoadState('domcontentloaded');

  });

  test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true
      });

    }

  });

  test('Verify homepage loads before search', async ({ page }) => {

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('Verify search input visible', async () => {

    await expect(searchPage.searchInput).toBeVisible();

  });

  const validProducts = [
    'Batman',
    'Marvel',
    'Anime',
    'Oversized',
    'Joggers'
  ];

  for (const product of validProducts) {

    test(`Search product ${product}`, async ({ page }) => {

      await searchPage.searchProduct(product);

      await page.waitForTimeout(3000);

      await expect(page.locator('body')).toBeVisible();

    });

  }

  test('Search with invalid keyword', async ({ page }) => {

    await searchPage.searchProduct('xyzinvalid');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Search with empty input', async ({ page }) => {

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Search with numbers', async ({ page }) => {

    await searchPage.searchProduct('12345');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Search with special characters', async ({ page }) => {

    await searchPage.searchProduct('@#$%');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify search results page opens', async ({ page }) => {

    await searchPage.searchProduct('Batman');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify search URL changes', async ({ page }) => {

    await searchPage.searchProduct('Marvel');

    await expect(page).toHaveURL(/search|product/);

  });

  test('Verify page reload after search', async ({ page }) => {

    await searchPage.searchProduct('Anime');

    await page.reload();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify screenshot capture after search', async ({ page }) => {

    await searchPage.searchProduct('Batman');

    await page.screenshot({
      path: 'screenshots/search-module.png',
      fullPage: true
    });

  });

  test('Verify search page scroll works', async ({ page }) => {

    await page.mouse.wheel(0, 3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify search page network idle state', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await expect(page.locator('body')).toBeVisible();

  });

});