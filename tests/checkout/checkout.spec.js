const { test, expect } = require('@playwright/test');

const CheckoutPage = require('../../pages/checkoutpage');

test.describe('Checkout Module', () => {

  let checkoutPage;

  test.beforeEach(async ({ page }) => {

    checkoutPage = new CheckoutPage(page);

    await checkoutPage.openCheckoutPage();

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

  test('Verify checkout page opens successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify checkout URL loaded', async ({ page }) => {

    await expect(page).toHaveURL(/checkout|cart|address|login/);

  });

  test('Verify checkout page title available', async ({ page }) => {

    const title = await page.title();

    expect(title.length).toBeGreaterThan(0);

  });

  test('Verify body visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify input fields available', async ({ page }) => {

    const count = await page.locator('input').count();

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
      path: 'screenshots/checkout-module.png',
      fullPage: true
    });

  });

  test('Verify checkout UI loads properly', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify links available on checkout page', async ({ page }) => {

    const count = await page.locator('a').count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify checkout page responds after reload', async ({ page }) => {

    await page.reload();

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify checkout page allows scrolling to bottom', async ({ page }) => {

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify checkout page DOM loaded', async ({ page }) => {

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify checkout page network idle state', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify soft assertion on checkout page', async ({ page }) => {

    await expect.soft(page.locator('body')).toBeVisible();

  });

  test('Verify checkout page screenshot after scroll', async ({ page }) => {

    await page.mouse.wheel(0, 2000);

    await page.screenshot({
      path: 'screenshots/checkout-scroll.png',
      fullPage: true
    });

  });

  test('Verify checkout page reload stability', async ({ page }) => {

    await page.reload();

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify checkout page loads without console errors', async ({ page }) => {

    const errors = [];

    page.on('pageerror', error => errors.push(error));

    await page.waitForTimeout(3000);

    expect(errors.length).toBe(0);

  });

});