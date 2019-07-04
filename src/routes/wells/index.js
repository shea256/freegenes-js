import React from 'react';
import Wells from './Wells';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        wells {
          address,media,organism,organism_uuid,plate_uuid,quantity,uuid,volume
        }
        plates {
          uuid,plate_name
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  if (!data) throw new Error('Failed to load data.');
  if (!data.wells) throw new Error('Failed to load wells.');
  if (!data.plates) throw new Error('Failed to load plates.');

  let plates = {}
  data.plates.map(plate => {
    plates[plate.uuid] = plate
  })

  return {
    title: 'FreeGenes Wells',
    chunks: ['wells'],
    component: (
      <Layout>
        <Wells wells={data.wells} plates={plates} />
      </Layout>
    ),
  };
}

export default action;