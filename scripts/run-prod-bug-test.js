const { chromium } = require('playwright');

(async () => {
  // Use an installed Chrome executable to avoid requiring Playwright-managed browsers
  const browser = await chromium.launch({ headless: true, executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" });
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', (msg) => console.log('[browser]', msg.type(), msg.text()));
  page.on('pageerror', (err) => console.error('[pageerror]', err.message));

  // Intercept network requests to mock backend
  await page.route('**/functions/v1/*', async (route) => {
    const url = route.request().url();
    const method = route.request().method();

    if (url.endsWith('/auth/me')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ user: { id: 'u1', email: 'px.hung@nkba.vn', name: 'Hung PX' } }),
      });
      return;
    }

    if (url.endsWith('/strategies') && method === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ strategies: [] }),
      });
      return;
    }

    if (url.endsWith('/strategies') && method === 'POST') {
      // Return malformed response (missing id) to reproduce bug
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ strategy: { name: 'malformed', version: '1.0' } }),
      });
      return;
    }

    // fallback: continue
    await route.continue();
  });

  const url = 'http://localhost:5000/';
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle' });

  // Wait for app to initialize and sidebar to appear
  await page.waitForSelector('text=Dashboard', { timeout: 5000 });

  // Click Dashboard (ensure we're on dashboard)
  await page.click('text=Dashboard');
  await page.waitForTimeout(500);

  // Click Strategy Vault in sidebar
  await page.click('text=Strategy Vault');
  await page.waitForTimeout(500);

  // Click the 'Tạo Chiến Lược Mới' button if exists, otherwise try 'Tạo Chiến' partial
  try {
    await page.click('text=Tạo Chiến Lược Mới', { timeout: 2000 });
  } catch (e) {
    try {
      await page.click('text=Tạo Chiến', { timeout: 2000 });
    } catch (e2) {
      console.error('Could not find create button');
      await browser.close();
      process.exit(1);
    }
  }

  // Wait for modal
  await page.waitForSelector('text=Name Strategy', { timeout: 3000 }).catch(() => {});

  // Fill name input
  // Try finding an input with placeholder or label
  const nameInput = await page.locator('input[placeholder="Name Strategy"]').first();
  if (await nameInput.count() === 0) {
    // fallback find input near label
    const label = await page.locator('text=Name Strategy').first();
    if (await label.count() > 0) {
      const input = label.locator('xpath=../..').locator('input').first();
      await input.fill('E2E Test');
    }
  } else {
    await nameInput.fill('E2E Test');
  }

  // Click 'Tạo' or 'Create' button in the modal
  try {
    await page.click('text=Tạo');
  } catch (e) {
    try { await page.click('text=Create'); } catch (e2) { console.error('Could not find submit button'); }
  }

  // Wait a bit for potential error
  await page.waitForTimeout(2000);

  console.log('Test complete, closing browser');
  await browser.close();
})();