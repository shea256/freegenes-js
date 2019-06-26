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

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{collections{name,readme,time_created,uuid}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.collections) throw new Error('Failed to load collections.');
  console.log(data.collections)
  return {
    title: 'FreeGenes Collections',
    chunks: ['home'],
    component: (
      <Layout>
        <Home collections={data.collections} />
      </Layout>
    ),
  };
}

export default action;
