/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */

const LOCAL_PORT = process.env.CI === true ? process.env.PORT || 3000 : 3006;
const LOCAL_IP =
  process.env.CI === true ? require('ip').address() : 'localhost';

const browser = global.__BROWSER__;
const settings = {
  homepage: `http://${LOCAL_IP}:${LOCAL_PORT}`,
  emulator: {
    viewport: { width: 800, height: 2400 },
    userAgent: '',
  },
  timeout: 16 * 1000, // 16 seconds
};
const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;

describe('Login Form', () => {
  test(
    'Can navigate to login form',
    async () => {
      // Open a new browser page
      const page = await browser.newPage();

      // Go to the home page and wait for the navbar items
      await page.goto(settings.homepage);
      await page.waitForSelector('.navbar-nav > .nav-item');

      // Navigate to the login page
      await page.click('.navbar-nav > .nav-item:last-child');

      // Wait for the 'Login' H1 tag
      await page.waitForSelector('h1');
      const loginH1InnerHTML = await page.$eval('h1', e => e.innerHTML);
      expect(loginH1InnerHTML).toBe('Login');

      // Submit the form and wait for the 'Admin' H1 tag

      await page.evaluate(
        (usernameOrEmail, password) => {
          document.querySelector('#usernameOrEmail').value = usernameOrEmail;
          document.querySelector('#password').value = password;
          document.querySelector('#submit').click();
        },
        adminUsername,
        adminPassword,
      );

      // Wait for the Admin page to load and expect the H1 tag
      await page.waitForNavigation();
      const adminH1InnerHTML = await page.$eval('h1', e => e.innerHTML);
      expect(adminH1InnerHTML).toBe('Admin');

      // Close the page
      page.close();
    },
    settings.timeout,
  );
});
