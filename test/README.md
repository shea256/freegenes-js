# Testing

### Commands

```bash
yarn run lint                   # Find problematic patterns in code
yarn run check                  # Check source code for type errors
yarn run test                   # Run unit tests once
yarn run test-watch             # Run unit tests in watch mode
```

For more information visit http://facebook.github.io/jest/

### Files

- [jestEnvironment.js](./jestEnvironment.js) - envirornment file for jest & puppeteer
- [setupEnzyme.js](./setupEnzyme.js) - setup file for enzyme
- [setupPuppeteer.js](./setupPuppeteer.js) - setup file for puppeteer
- [teardown.js](./teardown.js) - teardown file for puppeteer
