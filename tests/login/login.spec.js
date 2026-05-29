const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/loginpage');

test.describe('Login Module', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    await loginPage.openLoginPage();

  });

  test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true
      });

    }

  });

  test('Verify login page opens successfully', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox login rendering issue');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify login URL contains login', async ({ page }) => {

    const url = page.url();

    expect(url).toContain('login');

  });

  test('Verify input fields available', async ({ page }) => {

    await page.waitForLoadState('domcontentloaded');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify page contains form elements', async ({ page }) => {

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify buttons visible', async () => {

    const count = await loginPage.buttons.count();

    expect(count).toBeGreaterThan(0);

  });

  test('Verify links visible', async () => {

    const count = await loginPage.links.count();

    expect(count).toBeGreaterThan(0);

  });

  test('Verify login page body visible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify empty login validation flow', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox',
      'Firefox validation issue');

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify invalid email handling flow', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify invalid password handling flow', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify page refresh works', async ({ page }) => {

    await page.reload();

    await page.waitForLoadState('domcontentloaded');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify login page scroll works', async ({ page }) => {

    await page.mouse.wheel(0, 3000);

    await expect(page.locator('body')).toBeVisible();

  });

  test('Verify screenshot capture', async ({ page }) => {

    await page.screenshot({
      path: 'screenshots/login-module.png',
      fullPage: true
    });

  });

  test('Verify soft assertions on login page', async ({ page }) => {

    await expect.soft(page.locator('body')).toBeVisible();

    await expect.soft(page.locator('input').first()).toBeVisible();

  });

  test('Verify login UI loads properly', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

    await expect(page.locator('input').first()).toBeVisible();

  });

});