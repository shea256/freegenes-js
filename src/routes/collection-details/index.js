import React from 'react';
import CollectionDetails from './CollectionDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
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
  if (!data) throw new Error('Failed to load data.');
  if (!data.collection) throw new Error('Failed to load collection.');
  if (!data.allParts) throw new Error('Failed to load parts.');

  const collection = data.collection

  let parts = {}
  data.allParts.map(part => {
    parts[part.uuid] = part
  })

  return {
    title: `Collection ${collection.name}`,
    component: (
      <Layout>
        <CollectionDetails collection={collection} parts={parts} />
      </Layout>
    ),
  };
}

export default action;