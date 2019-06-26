import React from 'react';
import Collections from './Collections';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{collections{name,readme,time_created,uuid,tags}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.collections) throw new Error('Failed to load collections.');
  return {
    title: 'FreeGenes Collections',
    chunks: ['collections'],
    component: (
      <Layout>
        <Collections collections={data.collections} />
      </Layout>
    ),
  };
}

export default action;