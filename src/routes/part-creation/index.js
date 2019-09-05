import React from 'react';
import CreatePart from './CreatePart';
import Layout from '../../components/Layout';

async function action({ /* fetch, params, */ store }) {
  return {
    title: `Create Part`,
    component: (
      <Layout store={store}>
        <CreatePart />
      </Layout>
    ),
  };
}

export default action;
