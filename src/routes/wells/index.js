import React from 'react';
import Wells from './Wells';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{wells{address,media,organism,organism_uuid,plate_uuid,quantity,uuid,volume}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.wells) throw new Error('Failed to load wells.');
  return {
    title: 'FreeGenes Wells',
    chunks: ['wells'],
    component: (
      <Layout>
        <Wells wells={data.wells} />
      </Layout>
    ),
  };
}

export default action;