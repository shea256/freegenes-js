/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import puppeteer from 'puppeteer';

// const puppeteerSettings = { headless: false }

const LAUNCH_HEADLESS = true;

const settings = {
  website: 'http://localhost:3000',
  launcher: { headless: LAUNCH_HEADLESS, devtools: true, slowMo: 250 },
  emulator: {
    viewport: { width: 800, height: 2400 },
    userAgent: '',
  },
};

/*
describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch(settings.launcher)
    let page = await browser.newPage()
    page.emulate(settings.emulator)

    await page.goto(website)
    await page.waitForSelector('h1')

    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toBe('The DNA Commons')

    browser.close()
  }, 16000)
}) */

describe('Login Form', () => {
  test(
    'Can navigate to login form',
    async () => {
      const browser = await puppeteer.launch(settings.launcher);
      const page = await browser.newPage();
      page.emulate(settings.emulator);

      await page.goto(settings.website);
      await page.waitForSelector('.navbar-nav > .nav-item');
      await page.click('.navbar-nav > .nav-item:last-child');
      await page.waitForSelector('h1');

      const html = await page.$eval('h1', e => e.innerHTML);
      expect(html).toBe('Login');

      browser.close();
    },
    16000,
  );
});
