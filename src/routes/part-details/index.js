import React from 'react';
import PartDetails from './PartDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params, store }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        part(id: "${params.id}") {
          author_uuid,collection_id,description,gene_id,name,original_sequence,
          optimized_sequence,synthesized_sequence,part_type,status,tags,
          time_created,uuid
        }
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
  if (!data) throw new Error('Failed to load data.');
  if (!data.part) throw new Error('Failed to load part.');
  if (!data.allCollections) throw new Error('Failed to load collections.');
  if (!data.allAuthors) throw new Error('Failed to load authors.');

  const { part } = data;

  const collections = {};
  data.allCollections.forEach(collection => {
    collections[collection.uuid] = collection;
  });

  const authors = {};
  data.allAuthors.forEach(author => {
    authors[author.uuid] = author;
  });

  return {
    title: `Part ${part.name}`,
    component: (
      <Layout store={store}>
        <PartDetails part={part} collections={collections} authors={authors} />
      </Layout>
    ),
  };
}

export default action;
