import React from 'react';
import CollectionDetails from './CollectionDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params, store }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        collection(id: "${params.id}") {
          name,readme,parts,tags,time_created,uuid
        }
        allParts {
          uuid,name
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  const errors = [];
  const parts = {};
  // console.log(data.allParts);
  if (!data) {
    errors.push('Failed to load data.');
  }
  if (!data.collection) {
    errors.push('Failed to load collection.');
  }

  if (!data.allParts) {
    errors.push('Failed to load parts.');
  } else {
    data.allParts.forEach(part => {
      parts[part.uuid] = part;
    });
  }

  const { collection } = data;
  let title;
  if (collection && data.allParts) {
    title = `Collection ${collection.name}`;
  } else {
    title = 'Error Loading Collection';
  }

  return {
    title,
    component: (
      <Layout store={store}>
        <CollectionDetails
          collection={collection}
          parts={parts}
          errors={errors}
        />
      </Layout>
    ),
  };
}

export default action;
