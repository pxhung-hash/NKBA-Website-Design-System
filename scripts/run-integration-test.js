const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  // Capture console messages
  context.on('page', async (page) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('dialog', async dialog => {
      console.log('DIALOG:', dialog.message());
      await dialog.dismiss();
    });
  });

  const page = await context.newPage();

  page.on('console', (msg) => console.log('[browser]', msg.text()));
  page.on('dialog', (dialog) => {
    console.log('[dialog]', dialog.message());
    dialog.dismiss().catch(() => {});
  });

  const url = 'http://localhost:3000/?runIntegrationTest=1';
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle' });

  // Wait for the integration alert; it will happen when the test finishes
  // We'll wait up to 10s for the alert to appear
  try {
    await page.waitForFunction(() => !!window.__nkba_run_integration_test__, { timeout: 10000 });
    console.log('Integration flag detected on page');

    // Wait an additional time for the alert to be shown
    await page.waitForTimeout(5000);
  } catch (e) {
    console.error('Timed out waiting for integration test to run:', e?.message || e);
  }

  await browser.close();
  console.log('Playwright run complete');
})();