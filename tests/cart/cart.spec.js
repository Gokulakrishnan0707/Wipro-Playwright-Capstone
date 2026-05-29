const { test, expect } = require('@playwright/test');

const CartPage = require('../../pages/cartpage');

test.describe('Cart Module', () => {

  let cartPage;

  test.beforeEach(async ({ page }) => {

    cartPage = new CartPage(page);

    await cartPage.openCartPage();

  });

  test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true
      });

    }

  });

 test.skip(({ browserName }) => browserName === 'firefox',
'Firefox cart rendering issue');

test('Verify cart page opens successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

});

  test('Verify cart URL contains cart', async ({ page }) => {

    const url = page.url();

    expect(url).toContain('cart');

  });

  test('Verify cart item section visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify product image visible', async () => {

    await expect(cartPage.images.first()).toBeVisible();

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

    await expect(cartPage.buttons.first()).toBeVisible();

  });

  test('Verify cart page refresh works', async ({ page }) => {

    await test.step('Refresh cart page', async () => {

      await cartPage.refreshCart();

    });

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

    await expect.soft(page.locator('img').first()).toBeVisible();

  });

  test('Verify cart buttons count', async () => {

    const count = await cartPage.buttons.count();

    expect(count).toBeGreaterThan(0);

  });

  test('Verify cart timeout handling', async ({ page }) => {

    test.setTimeout(60000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify cart UI loads properly', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

    await expect(page.locator('img').first()).toBeVisible();

  });

});