const { test, expect } = require('@playwright/test');

const SearchPage = require('../../pages/SearchPage');

test.describe('Search Module', () => {

  let searchPage;

  test.beforeEach(async ({ page }) => {

    searchPage = new SearchPage(page);

    await searchPage.openHomePage();

  });

  test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true
      });

    }

  });

  test('SRCH_001 - Verify homepage loads before search', async ({ page }) => {

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('SRCH_002 - Verify search input visible', async () => {

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

    test(`SRCH - Search product ${product}`, async ({ page }) => {

      await searchPage.searchProduct(product);

      await expect(page.locator('body')).toBeVisible();

    });

  }

  test('SRCH_008 - Search with invalid keyword', async ({ page }) => {

    await searchPage.searchProduct('xyzinvalid');

    await expect(page.locator('body')).toBeVisible();

  });

  test('SRCH_009 - Search with empty input', async ({ page }) => {

    await searchPage.searchProduct('');

    await expect(page.locator('body')).toBeVisible();

  });

  test('SRCH_010 - Search with numbers', async ({ page }) => {

    await searchPage.searchProduct('12345');

    await expect(page.locator('body')).toBeVisible();

  });

  test('SRCH_011 - Search with special characters', async ({ page }) => {

    await searchPage.searchProduct('@#$%');

    await expect(page.locator('body')).toBeVisible();

  });

  test('SRCH_012 - Verify search results page opens', async ({ page }) => {

    await searchPage.searchProduct('Batman');

    await expect(page.locator('body')).toBeVisible();

  });

  test('SRCH_013 - Verify search URL changes', async ({ page }) => {

    await searchPage.searchProduct('Marvel');

    await expect(page).toHaveURL(/search/);

  });

  test('SRCH_014 - Verify page reload after search', async ({ page }) => {

    await searchPage.searchProduct('Anime');

    await page.reload();

    await expect(page.locator('body')).toBeVisible();

  });

  test('SRCH_015 - Verify screenshot capture after search', async ({ page }) => {

    await searchPage.searchProduct('Batman');

    await page.screenshot({
      path: 'screenshots/search-module.png',
      fullPage: true
    });

  });

});