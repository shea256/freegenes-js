import {
  GraphQLString as StringType,
} from 'graphql';
import fetch from 'node-fetch';
import PartType from '../types/PartType';

// FreeGenes Part Details API
const url = 'https://api.freegenes.org/parts/full/';

const part = {
  type: new Object(PartType),
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

export default part;