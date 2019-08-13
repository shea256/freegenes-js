/* eslint-env jest */
/* eslint-disable no-console, no-underscore-dangle */

const chalk = require('chalk');
const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

const SETTINGS = {
  DEV: {
    headless: false,
    devtools: false,
    slowMo: 250,
  },
  CI: {
    headless: true,
    devtools: false,
  },
};

const LAUNCH_SETTINGS = process.env.CI === 'true' ? SETTINGS.CI : SETTINGS.DEV;

module.exports = async function setup() {
  console.log(chalk.green('\nSetup Puppeteer'));
  const browser = await puppeteer.launch(LAUNCH_SETTINGS);
  // This global is not available inside tests but only in global teardown
  global.__BROWSER_GLOBAL__ = browser;
  // Instead, we expose the connection details via file system to be used in tests
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
