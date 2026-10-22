const { test, expect } = require('@playwright/test');

// 各ページは public/404.html と同じく /?p=<path> 経由で開きます。
const pages = [
  { path: '/en/about', title: 'About Us' },
  { path: '/en/gallery', title: 'Gallery' },
  { path: '/en/blog', title: 'Latest Blog' },
  { path: '/en/contact', title: 'Contact' },
];

test('/ は /en へリダイレクトされる', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole('heading', { name: 'hello i18n !!' })).toBeVisible();
});

// NOTE: 404.html は先頭 1 セグメントしか残さないので、今は /en に戻る (#8)。
test('存在しないパスを直接開くと 404 にならず /en に戻る', async ({ page }) => {
  await page.goto('/en/about');
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole('heading', { name: 'hello i18n !!' })).toBeVisible();
});

for (const { path, title } of pages) {
  test(`${path} が表示される`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`/?p=${path}`);
    await expect(page).toHaveURL(new RegExp(`${path}$`));
    await expect(page.locator('.page-title')).toHaveText(title);
    expect(errors).toEqual([]);
  });
}

test('トップページのメニューが使える', async ({ page, isMobile }) => {
  await page.goto('/?p=/en/index');
  await expect(page).toHaveURL(/\/en\/index$/);
  await expect(page.getByRole('heading', { name: 'Follow Instagram' })).toBeVisible();
  const about = page.locator('#nav > li > a', { hasText: 'About' });
  if (isMobile) {
    await expect(about).not.toBeInViewport();
    await page.locator('.navbarToggler').click();
    await expect(page.locator('.classy-menu')).toHaveClass(/menu-on/);
  }
  await expect(about).toBeInViewport();
  await expect(about).toHaveAttribute('href', '/en/about');
});
