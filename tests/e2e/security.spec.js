const { test, expect } = require('@playwright/test');

// public/alime に置いてるライブラリと Vue 本体が、既知の脆弱性が直ったバージョンで動いているか見ます。
test('脆弱性が直ったバージョンのライブラリで動いている', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/?p=/en/index');
  await expect(page.locator('#alimeNav')).toBeVisible();

  const versions = await page.evaluate(() => ({
    jquery: window.jQuery.fn.jquery,
    bootstrap: window.jQuery.fn.tooltip.Constructor.VERSION,
    vue: document.querySelector('#app').__vue_app__?.version,
  }));
  expect(versions).toEqual({ jquery: '3.7.1', bootstrap: '4.6.2', vue: '3.5.44' });
  expect(errors).toEqual([]);
});
