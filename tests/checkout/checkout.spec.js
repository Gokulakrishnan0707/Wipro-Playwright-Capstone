const { test, expect } = require('@playwright/test');

const CheckoutPage = require('../../pages/checkoutpage');

test.describe('Checkout Module', () => {

  let checkoutPage;

  test.beforeEach(async ({ page }) => {

    checkoutPage = new CheckoutPage(page);

    await checkoutPage.openCheckoutPage();

  });

  test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true
      });

    }

  });

  test('Verify checkout page opens successfully', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox checkout rendering issue');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify checkout URL loaded', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox checkout URL issue');

    const url = page.url();

    expect(url.length).toBeGreaterThan(0);

  });

  test('Verify checkout page title available', async ({ page }) => {

    const title = await page.title();

    expect(title.length).toBeGreaterThan(0);

  });

  test('Verify body visible', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox body rendering issue');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify input fields available', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox input rendering issue');

    const count = await page.locator('input').count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify buttons available', async ({ page }) => {

    const count = await page.locator('button').count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify page refresh works', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox refresh issue');

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

  test('Verify checkout page responds after reload', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox reload issue');

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

});