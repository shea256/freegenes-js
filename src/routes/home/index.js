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

async function action({ fetch, store }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        allCollections {
          name,readme,parts,time_created,tags,uuid
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  const errors = [];
  let collections = [];
  if (!data || !data.allCollections) {
    // console.log(data);
    errors.push('Failed to load collections.');
  } else if (data.allCollections.length === 0) {
    errors.push('No collections found.');
  } else {
    collections = data.allCollections;
  }

  return {
    title: 'FreeGenes Home',
    chunks: ['home'],
    component: (
      <Layout store={store}>
        <Home collections={collections} errors={errors} />
      </Layout>
    ),
  };
}

export default action;
