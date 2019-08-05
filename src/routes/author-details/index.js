import React from 'react';
import AuthorDetails from './AuthorDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params, store }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        author(id: "${params.id}") {
          affiliation,email,name,uuid,parts
        }
        allParts {
          uuid,name
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  if (!data) throw new Error('Failed to load data.');
  if (!data.author) throw new Error('Failed to load author.');
  if (!data.allParts) throw new Error('Failed to load parts.');

  const { author } = data;

  const parts = {};
  data.allParts.forEach(part => {
    parts[part.uuid] = part;
  });

  return {
    title: `Author: ${author.name}`,
    component: (
      <Layout store={store}>
        <AuthorDetails author={author} parts={parts} />
      </Layout>
    ),
  };
}

export default action;
