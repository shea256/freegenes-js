import React from 'react';
import WellDetails from './WellDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  const resp = await fetch(
    `https://api.freegenes.org/wells/full/${params.id}`);
  const data = await resp.json();
  if (!data) throw new Error('Failed to load well.');
  return {
    title: 'Well Details',
    component: (
      <Layout>
        <WellDetails well={data} />
      </Layout>
    ),
  };
}

export default action;