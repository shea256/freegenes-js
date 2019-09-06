import React from 'react';
import PartDetails from './PartDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params, store }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        part(id: "${params.id}") {
          author_uuid,collection_id,description,full_sequence,gene_id,name,
          original_sequence,optimized_sequence,synthesized_sequence,
          part_type,status,tags,time_created,uuid,vbd
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
  const errors = [];
  const collections = {};
  const authors = {};
  let part;

  if (!data) {
    errors.push('Failed to load data.');
  }
  if (!data.part) {
    errors.push('Failed to load part.');
  }
  if (!data.allCollections) {
    errors.push('Failed to load collections.');
  }
  if (!data.allAuthors) {
    errors.push('Failed to load authors.');
  }

  if (errors.length === 0) {
    part = data.part;
    data.allCollections.forEach(collection => {
      collections[collection.uuid] = collection;
    });
    data.allAuthors.forEach(author => {
      authors[author.uuid] = author;
    });
  }

  let title;
  let collection;
  let author;
  if (part) {
    title = `Part ${part.name}`;
    if (part.collection_id in collections) {
      collection = collections[part.collection_id];
    }
    if (part.author_uuid in authors) {
      author = authors[part.author_uuid];
    }
  } else {
    title = 'Error Loading Part';
  }

  return {
    title,
    component: (
      <Layout store={store}>
        <PartDetails
          part={part}
          collection={collection}
          author={author}
          errors={errors}
        />
      </Layout>
    ),
  };
}

export default action;
