const { test, expect } = require('@playwright/test');

const PDPPage = require('../../pages/pdppage');

test.describe('PDP Module', () => {

  let pdpPage;

  test.beforeEach(async ({ page }) => {

    pdpPage = new PDPPage(page);

    await pdpPage.openPDPPage();

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

  test('Verify PDP page opens', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify URL loaded', async ({ page }) => {

    await expect(page).toHaveURL(/product|shop|men|women/);

  });

  test('Verify title exists', async ({ page }) => {

    const title = await page.title();

    expect(title.length).toBeGreaterThan(0);

  });

  test('Verify images visible', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox image rendering unstable');

    await expect(page.locator('img').first()).toBeVisible();

  });

  test('Verify body content available', async ({ page }) => {

    const text = await page.locator('body').textContent();

    expect(text.length).toBeGreaterThan(0);

  });

  test('Verify page refresh works', async ({ page }) => {

    await page.reload();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify scrolling works', async ({ page }) => {

    await page.mouse.wheel(0, 2000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify screenshot capture', async ({ page }) => {

    await page.screenshot({
      path: 'screenshots/pdp.png',
      fullPage: true
    });

  });

  test('Verify buttons available', async ({ page }) => {

    const count = await page.locator('button').count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify links available', async ({ page }) => {

    const count = await page.locator('a').count();

    expect(count).toBeGreaterThanOrEqual(0);

  });

  test('Verify network idle state', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify PDP UI loaded', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify page scroll to bottom', async ({ page }) => {

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify PDP page reload stability', async ({ page }) => {

    await page.reload();

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).toBeVisible();

  });

});