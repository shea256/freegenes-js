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
import Login from './Login';

const title = 'Login';

function action({ store }) {
  const { user } = store.getState();
  if (user) {
    return { redirect: '/admin' };
  }
  return {
    chunks: ['login'],
    title,
    component: (
      <Layout store={store}>
        <Login title={title} />
      </Layout>
    ),
  };
}

export default action;
