const { test, expect } = require('@playwright/test');

async function loadedVersions(page) {
  return page.evaluate(() => ({
    jquery: window.jQuery.fn.jquery,
    bootstrap: window.jQuery.fn.tooltip.Constructor.VERSION,
    vue: document.querySelector('#app').__vue__.$root.constructor.version,
  }));
}

test('public/alime の jQuery / Bootstrap は既知の脆弱性が直ったバージョン', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/?p=/en/index');
  await expect(page.locator('#alimeNav')).toBeVisible();

  const { jquery, bootstrap } = await loadedVersions(page);
  expect({ jquery, bootstrap }).toEqual({ jquery: '3.7.1', bootstrap: '4.6.2' });
  expect(errors).toEqual([]);
});

// NOTE: Vue 2 の CVE-2024-9506 は Vue 3 に上げないと直らない。今はまだ 2.6.12 のまま。
test('Vue は 2.6.12 のまま', async ({ page }) => {
  await page.goto('/?p=/en/index');
  await expect(page.locator('#alimeNav')).toBeVisible();
  expect((await loadedVersions(page)).vue).toBe('2.6.12');
});
