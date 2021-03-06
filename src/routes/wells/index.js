import React from 'react';
import Wells from './Wells';
import Layout from '../../components/Layout';
import getPaginationVariables from '../../utils/getPaginationVariables';

async function action({ fetch, /* params, */ query, store }) {
  const { first, skip, page } = getPaginationVariables(query);
  const gqlQuery = `query WellsQuery($first: Int, $skip: Int) { 
    allWells(first: $first, skip: $skip) {
      address,media,organism,organism_uuid,plate_uuid,quantity,uuid,volume
    }
    allPlates {
      uuid,plate_name
    }
  }`;
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: gqlQuery,
      variables: { first, skip },
    }),
  });
  const { data } = await resp.json();
  let wells = [];
  let plates = {};
  const errors = [];
  if (!data) {
    errors.push('Failed to load data.');
  } else if (!data.allWells) {
    errors.push('Failed to load wells.');
  } else if (!data.allPlates) {
    errors.push('Failed to load plates.');
  } else if (data.allWells.length === 0) {
    errors.push('No wells found.');
  } else {
    wells = data.allWells;
    plates = {};
    data.allPlates.forEach(plate => {
      plates[plate.uuid] = plate;
    });
  }

  return {
    title: 'FreeGenes Wells',
    chunks: ['wells'],
    component: (
      <Layout store={store}>
        <Wells
          wells={wells}
          plates={plates}
          variables={{ first, skip, page }}
          errors={errors}
        />
      </Layout>
    ),
  };
}

export default action;
