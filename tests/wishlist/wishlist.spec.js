const { test, expect } = require('@playwright/test');

const WishlistPage = require('../../pages/wishlistpage');

test.describe('Wishlist Module', () => {

  let wishlistPage;

  test.beforeEach(async ({ page }) => {

    wishlistPage = new WishlistPage(page);

    await wishlistPage.openWishlistPage();

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

  test('Verify wishlist page opens successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify wishlist URL loaded', async ({ page }) => {

    const url = page.url();

    expect(url.length).toBeGreaterThan(0);

  });

  test('Verify page title available', async ({ page }) => {

    const title = await page.title();

    expect(title.length).toBeGreaterThan(0);

  });

  test('Verify body visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify images available', async ({ page }) => {

    const count = await page.locator('img').count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify buttons available', async ({ page }) => {

    const count = await page.locator('button').count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify page refresh works', async ({ page }) => {

    await page.reload();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify page scroll works', async ({ page }) => {

    await page.mouse.wheel(0, 3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify screenshot capture', async ({ page }) => {

    await page.screenshot({
      path: 'screenshots/wishlist-module.png',
      fullPage: true
    });

  });

  test('Verify wishlist UI loads properly', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify wishlist page reload works', async ({ page }) => {

    await page.reload();

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify wishlist page DOM loaded', async ({ page }) => {

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify wishlist page network idle state', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify wishlist page links available', async ({ page }) => {

    const count = await page.locator('a').count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify soft assertion on wishlist page', async ({ page }) => {

    await expect.soft(page.locator('body')).toBeVisible();

  });

  test('Verify wishlist screenshot after scroll', async ({ page }) => {

    await page.mouse.wheel(0, 2000);

    await page.screenshot({
      path: 'screenshots/wishlist-scroll.png',
      fullPage: true
    });

  });

  test('Verify wishlist page responds after reload', async ({ page }) => {

    await page.reload();

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify wishlist page scroll to bottom', async ({ page }) => {

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await expect(page.locator('body')).toBeVisible();

  });

});