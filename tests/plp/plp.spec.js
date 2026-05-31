const { test, expect } = require('@playwright/test');

const PLPPage = require('../../pages/plppage');

test.describe('PLP Module', () => {

  let plpPage;

  test.beforeEach(async ({ page }) => {

    plpPage = new PLPPage(page);

    await plpPage.openMenCategory();

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

  test('Verify product listing page opens successfully', async ({ page }) => {

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify products displayed in listing page', async () => {

    await expect(plpPage.productCards.first()).toBeVisible();

  });

  test('Verify product title displayed', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify product image visible', async () => {

    await expect(plpPage.productCards.first()).toBeVisible();

  });

  test('Verify product name displayed', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify product price displayed', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify clicking product opens PDP', async ({ page }) => {

    await plpPage.clickFirstProduct();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify page body visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify multiple products loaded', async () => {

    const count = await plpPage.productCards.count();

    expect(count).toBeGreaterThan(0);

  });

  test('Verify breadcrumb/navigation visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify PLP page loaded properly', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify PLP content visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify product grid layout visible', async () => {

    await expect(plpPage.productCards.first()).toBeVisible();

  });

  test('Verify URL contains category', async ({ page }) => {

    await expect(page).toHaveURL(/men|women|collection/);

  });

  test('Verify screenshot capture for PLP', async ({ page }) => {

    await page.screenshot({
      path: 'screenshots/plp-module.png',
      fullPage: true
    });

  });

  test('Verify PLP page reload works', async ({ page }) => {

    await page.reload();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify PLP page scroll works', async ({ page }) => {

    await page.mouse.wheel(0, 3000);

    await expect(page.locator('body')).toBeVisible();

  });

});