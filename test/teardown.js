/* eslint-env jest */
/* eslint-disable no-console, no-underscore-dangle */

const chalk = require('chalk');
const rimraf = require('rimraf');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function teardown() {
  console.log(chalk.green('Tearing down Puppeteer...'));
  await global.__BROWSER_GLOBAL__.close();
  rimraf.sync(DIR);
};
