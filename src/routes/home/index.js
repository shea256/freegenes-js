/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ /* fetch, */ store }) {
  /* const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{}',
    }),
  });
  const { data } = await resp.json(); */
  return {
    title: 'FreeGenes Home',
    chunks: ['home'],
    component: (
      <Layout store={store}>
        <Home />
      </Layout>
    ),
  };
}

export default action;
