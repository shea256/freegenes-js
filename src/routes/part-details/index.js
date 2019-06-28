import React from 'react';
import PartDetails from './PartDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  const resp = await fetch(
    `https://api.freegenes.org/parts/full/${params.id}`);
  const data = await resp.json();
  if (!data) throw new Error('Failed to load part.');
  return {
    title: 'Part Details',
    component: (
      <Layout>
        <PartDetails part={data} />
      </Layout>
    ),
  };
}

export default action;