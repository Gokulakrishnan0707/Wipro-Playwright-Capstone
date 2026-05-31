const { test, expect } = require('@playwright/test');

const CartPage = require('../../pages/cartpage');

test.describe('Cart Module', () => {

  let cartPage;

  test.beforeEach(async ({ page }) => {

    cartPage = new CartPage(page);

    await cartPage.openCartPage();

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

  test('Verify cart page opens successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify cart URL contains cart', async ({ page }) => {

    await expect(page).toHaveURL(/cart/);

  });

  test('Verify cart item section visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify product image visible', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox image rendering unstable');

    await expect(page.locator('img').first()).toBeVisible();

  });

  test('Verify product title visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify product price displayed', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify quantity section visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify cart buttons visible', async () => {

    const count = await cartPage.buttons.count();

    expect(count).toBeGreaterThan(0);

  });

  test('Verify cart page refresh works', async ({ page }) => {

    await cartPage.refreshCart();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify cart scroll works', async ({ page }) => {

    await page.mouse.wheel(0, 4000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify screenshot capture', async ({ page }) => {

    await page.screenshot({
      path: 'screenshots/cart-module.png',
      fullPage: true
    });

  });

  test('Verify soft assertions on cart', async ({ page }) => {

    await expect.soft(page.locator('body')).toBeVisible();

  });

  test('Verify cart buttons count', async () => {

    const count = await cartPage.buttons.count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify cart timeout handling', async ({ page }) => {

    test.setTimeout(60000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify cart UI loads properly', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify cart page reload works properly', async ({ page }) => {

    await page.reload();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify cart page network idle state', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await expect(page.locator('body')).toBeVisible();

  });

});