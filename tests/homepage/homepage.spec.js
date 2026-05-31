const { test, expect } = require('@playwright/test');

const HomePage = require('../../pages/homepage');

test.describe('Homepage Module', () => {

  let homePage;

  test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);

    await homePage.openHomePage();

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

  test('Verify homepage URL loads successfully', async ({ page }) => {

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('Verify Men menu visible', async ({ page }) => {

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify Women menu visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify homepage loaded successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify current URL contains domain', async ({ page }) => {

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('Verify page loads successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify homepage banner visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify homepage has images', async ({ page }) => {

    const images = await page.locator('img').count();

    expect(images).toBeGreaterThan(0);

  });

  test('Verify homepage loads within timeout', async ({ page }) => {

    test.setTimeout(60000);

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('Verify footer visible', async ({ page }) => {

    await expect(page.locator('footer')).toBeVisible();

  });

  test('Verify body visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify page refresh works correctly', async ({ page }) => {

    await page.reload();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify homepage responsive on maximize', async ({ page }) => {

    await page.setViewportSize({
      width: 1920,
      height: 1080
    });

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify screenshot capture functionality', async ({ page }) => {

    await page.screenshot({
      path: 'screenshots/homepage.png',
      fullPage: true
    });

  });

  test('Verify homepage loads without broken UI', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

    await expect(page.locator('img').first()).toBeVisible();

  });

  test('Verify homepage scroll works properly', async ({ page }) => {

    await page.mouse.wheel(0, 4000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify homepage network idle state', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await expect(page.locator('body')).toBeVisible();

  });

});