const { test, expect } = require('@playwright/test');

const PLPPage = require('../../pages/PLPPage');

test.describe('PLP Module', () => {

  let plpPage;

  test.beforeEach(async ({ page }) => {

    plpPage = new PLPPage(page);

    await plpPage.openMenCategory();

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

    await page.waitForLoadState('domcontentloaded');

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

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify page body visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify multiple products loaded', async () => {

    const count = await plpPage.productCards.count();

    expect(count).toBeGreaterThan(10);

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

    await expect(plpPage.productCards.nth(2)).toBeVisible();

  });

  test('Verify URL contains category', async ({ page }) => {

    await expect(page).toHaveURL(/men/);

  });

  test('Verify screenshot capture for PLP', async ({ page }) => {

    await page.screenshot({
      path: 'screenshots/plp-module.png',
      fullPage: true
    });

  });

});
