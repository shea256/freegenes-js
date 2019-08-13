/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */

const LOCAL_PORT = process.env.PORT || 3000;
const LOCAL_IP_ADDRESS = require('ip').address();

const settings = {
  homepage: `http://${LOCAL_IP_ADDRESS}:${LOCAL_PORT}`,
  emulator: {
    viewport: { width: 800, height: 2400 },
    userAgent: '',
  },
  timeout: 16 * 1000, // 16 seconds
};

describe('Login Form', () => {
  test(
    'Can navigate to login form',
    async () => {
      const page = await global.__BROWSER__.newPage();
      // page.emulate(settings.emulator);

      await page.goto(settings.homepage);
      await page.waitForSelector('.navbar-nav > .nav-item');
      await page.click('.navbar-nav > .nav-item:last-child');
      await page.waitForSelector('h1');

      const html = await page.$eval('h1', e => e.innerHTML);

      expect(html).toBe('Login');

      page.close();
    },
    settings.timeout,
  );
});

/*
describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    let page = await browser.newPage()
    page.emulate(settings.emulator)

    await page.goto(website)
    await page.waitForSelector('h1')

    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toBe('The DNA Commons')

    browser.close()
  }, 16000)
}) */
