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
  if (!data || !data.allPlates) throw new Error('Failed to load plates.');
  
  return {
    title: 'FreeGenes Plates',
    chunks: ['plates'],
    component: (
      <Layout>
        <Plates plates={data.allPlates} />
      </Layout>
    ),
  };
}

export default action;