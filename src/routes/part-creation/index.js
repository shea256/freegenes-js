import React from 'react';
import CreatePart from './CreatePart';
import Layout from '../../components/Layout';

async function action({ fetch, /* params, */ store }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        allCollections {
          uuid,name
        }
        allAuthors {
          uuid,name
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  const errors = [];
  let authors = [];
  let collections = [];
  if (!data) {
    errors.push('Failed to load data.');
  } else if (!data.allCollections) {
    errors.push('Failed to load collections.');
  } else if (!data.allAuthors) {
    errors.push('Failed to load authors.');
  } else {
    collections = data.allCollections;
    authors = data.allAuthors;
  }
  const { user } = store.getState();
  if (!user) {
    return { redirect: '/login' };
  }

  return {
    title: `Create Part`,
    component: (
      <Layout store={store}>
        <CreatePart collections={collections} authors={authors} />
      </Layout>
    ),
  };
}

export default action;
