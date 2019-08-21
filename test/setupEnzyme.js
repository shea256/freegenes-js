// const chalk = require('chalk');
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
// console.log(chalk.green('\nSetting up Enzyme...'));
Enzyme.configure({ adapter: new EnzymeAdapter() });
