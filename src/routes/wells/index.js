import React from 'react';
import Wells from './Wells';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        allWells {
          address,media,organism,organism_uuid,plate_uuid,quantity,uuid,volume
        }
        allPlates {
          uuid,plate_name
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  let errors = []
  let wells = []
  let plates = {}
  if (!data) {
    errors.push('Failed to load data.')
  } else if (!data.allWells) {
    errors.push('Failed to load wells.')
  } else if (!data.allPlates) {
    errors.push('Failed to load plates.')
  } else if (data.allWells.length === 0) {
    errors.push('No wells found.')
  } else {
    wells = data.allWells
    plates = {}
    data.allPlates.map(plate => {
      plates[plate.uuid] = plate
    })
  }

  return {
    title: 'FreeGenes Wells',
    chunks: ['wells'],
    component: (
      <Layout>
        <Wells wells={wells} plates={plates} errors={errors} />
      </Layout>
    ),
  };
}

export default action;