import React from 'react';
import Parts from './Parts';
import Layout from '../../components/Layout';
import isPositiveInteger from '../../utils/isPositiveInteger';

async function action({ fetch, /* params, */ query, store }) {
  let first = 100;
  let skip = 0;
  const pageParam = query.page;
  let page = 1;
  if (!pageParam) {
    // do nothing
  } else if (isPositiveInteger(pageParam)) {
    page = parseInt(pageParam, 10);
    skip = first * (page - 1);
  } else {
    first = 0;
  }
  const gqlQuery = `query PartsQuery($first: Int, $skip: Int) {
    allParts(first: $first, skip: $skip) {
      collection_id,description,gene_id,name,original_sequence,part_type,
      status,tags,time_created,uuid
    }
  }`;
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: gqlQuery,
      variables: { first, skip },
    }),
  });
  const { data } = await resp.json();
  let parts = [];
  const errors = [];
  if (!data || !data.allParts) {
    errors.push('Failed to load parts.');
  } else if (data.allParts.length === 0) {
    errors.push('No parts found.');
  } else {
    parts = data.allParts;
  }

  return {
    title: 'FreeGenes Parts',
    chunks: ['parts'],
    component: (
      <Layout store={store}>
        <Parts
          parts={parts}
          variables={{ first, skip, page }}
          errors={errors}
        />
      </Layout>
    ),
  };
}

export default action;
