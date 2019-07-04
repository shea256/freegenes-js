import React from 'react';
import PlateDetails from './PlateDetails';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  // get the plate
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        plateDetails(id: "${params.id}") {
          breadcrumb,plate_form,plate_name,plate_type,plate_vendor_id,protocol_uuid,status,uuid,wells
        }
        wells {
          uuid,address,plate_uuid
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  if (!data) throw new Error('Failed to load data.');
  if (!data.plateDetails) throw new Error('Failed to load plate.');
  if (!data.wells) throw new Error('Failed to load wells.');

  let plate = data.plateDetails

  let wells = {}
  data.wells.map(well => {
    wells[well.uuid] = well
  })

  return {
    title: `Plate ${plate.plate_name}`,
    component: (
      <Layout>
        <PlateDetails plate={plate} wells={wells} />
      </Layout>
    ),
  };
}

export default action;