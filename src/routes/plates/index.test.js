/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */

import React from 'react';
import configureMockStore from 'redux-mock-store';
import nodeFetch from 'node-fetch';
import { mount } from 'enzyme';
import App from '../../components/App';
import indexAction from './index';
import createFetch from '../../createFetch';

const mockStore = configureMockStore();
const baseUrl = 'http://localhost:3000';

describe('Plates Page', () => {
  test('Renders correctly', async () => {
    const pathname = '/plates';
    const fetch = createFetch(nodeFetch, { baseUrl });
    const store = mockStore({});
    const appContext = {
      store,
      insertCss: () => {},
      fetch: () => {},
      pathname,
    };

    const page = await indexAction({ fetch, store })
      .then(value => value)
      .catch((/* err */) => {
        /* do nothing with error */
      });

    const wrapper = await mount(
      <App context={appContext}>{page.component}</App>,
    );

    const headers = wrapper.find('h1');
    expect(headers.length).toEqual(1);
    expect(headers.props().children).toEqual('Plates');

    const tableRows = wrapper.find('tr');
    expect(tableRows.length).toBeGreaterThan(0);
  });
});
