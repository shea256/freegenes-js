import React from 'react';
import Plates from './Plates';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{
        allPlates {
          breadcrumb,plate_form,plate_name,plate_type,plate_vendor_id,protocol_uuid,status,uuid
        }
      }`,
    }),
  });
  const { data } = await resp.json();
  let errors = []
  let plates = []
  if (!data || !data.allPlates) {
    errors.push('Failed to load plates.')
  } else if (data.allPlates.length === 0) {
    errors.push('No plates found.')
  } else {
    plates = data.allPlates
  }
  
  return {
    title: 'FreeGenes Plates',
    chunks: ['plates'],
    component: (
      <Layout>
        <Plates plates={plates} errors={errors} />
      </Layout>
    ),
  };
}

export default action;