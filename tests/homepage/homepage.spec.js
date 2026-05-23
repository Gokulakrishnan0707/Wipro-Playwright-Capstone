const { test, expect } = require('@playwright/test');

const HomePage = require('../../pages/HomePage');

test.describe('Homepage Module', () => {

  let homePage;

  test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);

    await homePage.openHomePage();

  });

  test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true
      });

    }

  });

  test('HOME_001 - Verify homepage URL loads successfully', async ({ page }) => {

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('HOME_002 - Verify Men menu visible', async () => {

    await expect(homePage.menMenu).toBeVisible();

  });

  test('HOME_003 - Verify Women menu visible', async () => {

    await expect(homePage.womenMenu).toBeVisible();

  });

  test('HOME_004 - Verify homepage loaded successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

});

  test('HOME_005 - Verify current URL contains domain', async ({ page }) => {

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('HOME_006 - Verify page loads successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('HOME_007 - Verify homepage banner visible', async ({ page }) => {

    await expect(page.locator('img').first()).toBeVisible();

  });

  test('HOME_008 - Verify homepage has images', async ({ page }) => {

    const images = await page.locator('img').count();

    expect(images).toBeGreaterThan(0);

  });

  test('HOME_009 - Verify homepage loads within timeout', async ({ page }) => {

    test.setTimeout(60000);

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('HOME_010 - Verify footer visible', async ({ page }) => {

    await expect(page.locator('footer')).toBeVisible();

  });

  test('HOME_011 - Verify body visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('HOME_012 - Verify page refresh works correctly', async ({ page }) => {

    await page.reload();

    await expect(page).toHaveURL(/thesouledstore/);

  });

  test('HOME_013 - Verify homepage responsive on maximize', async ({ page }) => {

    await page.setViewportSize({
      width: 1920,
      height: 1080
    });

    await expect(page.locator('body')).toBeVisible();

  });

  test('HOME_014 - Verify screenshot capture functionality', async ({ page }) => {

    await page.screenshot({
      path: 'screenshots/homepage.png',
      fullPage: true
    });

  });

  test('HOME_015 - Verify homepage loads without broken UI', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

    await expect(page.locator('img').first()).toBeVisible();

  });

});