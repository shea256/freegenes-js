import React from 'react';
import Authors from './Authors';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{authors{affiliation,email,name,uuid}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.authors) throw new Error('Failed to load authors.');
  return {
    title: 'FreeGenes Authors',
    chunks: ['authors'],
    component: (
      <Layout>
        <Authors authors={data.authors} />
      </Layout>
    ),
  };
}

export default action;