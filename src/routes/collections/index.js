import React from 'react';
import Collections from './Collections';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        allCollections {
          name,readme,time_created,uuid,tags
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  let errors = []
  let collections = []
  if (!data || !data.allCollections) {
    errors.push('Failed to load collections.')
  } else if (data.allCollections.length === 0) {
    errors.push('No collections found.')
  } else {
    collections = data.allCollections
  }
  
  return {
    title: 'FreeGenes Collections',
    chunks: ['collections'],
    component: (
      <Layout>
        <Collections collections={collections} errors={errors} />
      </Layout>
    ),
  };
}

export default action;