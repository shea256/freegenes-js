import React from 'react';
import Parts from './Parts';
import Layout from '../../components/Layout';
import isPositiveInteger from '../../utils/isPositiveInteger';

async function action({ fetch, params, query }) {
  let first = 100;
  let skip = 0;
  const pageParam = query.page;
  let page = 1;
  if (!pageParam) {
    // do nothing
  } else if (isPositiveInteger(pageParam)) {
    page = parseInt(pageParam)
    skip = first*(page-1)
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
      variables: { first, skip }
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.allParts) throw new Error('Failed to load parts.');
  
  return {
    title: 'FreeGenes Parts',
    chunks: ['parts'],
    component: (
      <Layout>
        <Parts parts={data.allParts} variables={{ first, skip, page }} />
      </Layout>
    ),
  };
}

export default action;