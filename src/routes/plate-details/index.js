import React from 'react';
import PlateDetails from './PlateDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  const resp = await fetch(
    `https://api.freegenes.org/plates/full/${params.id}`);
  const data = await resp.json();
  if (!data) throw new Error('Failed to load plate.');
  return {
    title: 'Plate Details',
    component: (
      <Layout>
        <PlateDetails plate={data} />
      </Layout>
    ),
  };
}

export default action;