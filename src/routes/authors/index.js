import React from 'react';
import Authors from './Authors';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        allAuthors {
          affiliation,email,name,uuid
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  let errors = []
  let authors = []
  if (!data || !data.allAuthors) {
    errors.push('Failed to load authors.')
  } else if (data.allAuthors.length === 0) {
    errors.push('No authors found.')
  } else {
    authors = data.allAuthors
  }
  
  return {
    title: 'FreeGenes Authors',
    chunks: ['authors'],
    component: (
      <Layout>
        <Authors authors={authors} errors={errors} />
      </Layout>
    ),
  };
}

export default action;