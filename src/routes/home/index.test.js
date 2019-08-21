/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */

import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import nodeFetch from 'node-fetch';

import App from '../../components/App';
import indexAction from './index';
import createFetch from '../../createFetch';

const mockStore = configureMockStore();
const baseUrl = 'http://localhost:3000';

describe('Home Page', () => {
  test('Renders correctly', async () => {
    const fetch = createFetch(nodeFetch, { baseUrl });
    const store = mockStore({});

    const indexPage = await indexAction({ fetch, store })
      .then(value => value)
      .catch((/* err */) => {
        // do nothing with the error
      });

    const pageRenderer = await renderer.create(
      <App
        context={{
          store,
          insertCss: () => {},
          fetch: () => {},
          pathname: '/',
        }}
      >
        {indexPage.component}
      </App>,
    );
    const pageInstance = pageRenderer.root;

    const h1 = pageInstance.findByType('h1');
    expect(h1.children).toEqual(['The DNA Commons']);
  });
});
