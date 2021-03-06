/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Admin from './Admin';

const title = 'Admin Dashboard';
// const isAdmin = false;

function action({ store }) {
  const { user } = store.getState();
  if (!user) {
    return { redirect: '/login' };
  }
  return {
    chunks: ['admin'],
    title,
    component: (
      <Layout store={store}>
        <Admin title={title} />
      </Layout>
    ),
  };
}

export default action;
