import React from 'react';
import WellDetails from './WellDetails';
import Layout from '../../components/Layout';


async function action({ fetch, params }) {
  // get the well
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        wellDetails(id: "${params.id}") {
          address,media,organism,organism_uuid,plate_uuid,quantity,uuid,volume,samples
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.wellDetails) throw new Error('Failed to load well.');

  // set the well
  let well = data.wellDetails

  // get the plate
  const resp2 = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        plateDetails(id: "${well.plate_uuid}") {
          uuid,plate_name
        }
      }`
    })
  });
  const resp2JSON = await resp2.json();
  const data2 = resp2JSON.data
  if (!data2 || !data2.plateDetails) throw new Error('Failed to load plates.');

  // set the plate
  well.plate = data2.plateDetails

  return {
    title: `Well ${well.address}`,
    component: (
      <Layout>
        <WellDetails well={well} />
      </Layout>
    ),
  };
}

export default action;