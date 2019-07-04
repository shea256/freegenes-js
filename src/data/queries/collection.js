import {
  GraphQLString as StringType,
} from 'graphql';
import fetch from 'node-fetch';
import CollectionType from '../types/CollectionType';

// FreeGenes Collection Details API
const url = 'https://api.freegenes.org/collections/full/';

const collection = {
  type: new Object(CollectionType),
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

export default collection;