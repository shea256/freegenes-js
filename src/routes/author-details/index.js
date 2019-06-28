import React from 'react';
import AuthorDetails from './AuthorDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  const resp = await fetch(
    `https://api.freegenes.org/authors/full/${params.id}`);
  const data = await resp.json();
  if (!data || !data.name) throw new Error('Failed to load author.');
  return {
    title: `Author: ${data.name}`,
    component: (
      <Layout>
        <AuthorDetails author={data} />
      </Layout>
    ),
  };
}

export default action;