import React from 'react';
import Parts from './Parts';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{parts{collection_id,description,gene_id,name,original_sequence,part_type,status,tags,time_created,uuid}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.parts) throw new Error('Failed to load parts.');
  return {
    title: 'FreeGenes Parts',
    chunks: ['parts'],
    component: (
      <Layout>
        <Parts parts={data.parts} />
      </Layout>
    ),
  };
}

export default action;