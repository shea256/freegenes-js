import {
  GraphQLString as StringType,
} from 'graphql';
import fetch from 'node-fetch';
import PlateType from '../types/PlateType';

// FreeGenes Plate Details API
const url = 'https://api.freegenes.org/plates/full/';

const plate = {
  type: new Object(PlateType),
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

export default plate;