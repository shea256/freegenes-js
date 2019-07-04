import {
  GraphQLString as StringType,
} from 'graphql';
import fetch from 'node-fetch';
import WellType from '../types/WellType';

// FreeGenes Well Details API
const url = 'https://api.freegenes.org/wells/full/';

const well = {
  type: new Object(WellType),
  args: {
    id: { type: StringType },
  },
  resolve(_, { id }) {
    return fetch(url + id)
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(err => {
      throw err;
    });
  },
};

export default well;