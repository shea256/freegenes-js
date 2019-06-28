import React from 'react';
import CollectionDetails from './CollectionDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  const resp = await fetch(
    `https://api.freegenes.org/collections/full/${params.id}`);
  const data = await resp.json();
  if (!data) throw new Error('Failed to load collection.');
  return {
    title: 'Collection Details',
    component: (
      <Layout>
        <CollectionDetails collection={data} />
      </Layout>
    ),
  };
}

export default action;