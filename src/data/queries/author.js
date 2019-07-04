import {
  GraphQLString as StringType,
} from 'graphql';
import fetch from 'node-fetch';
import AuthorType from '../types/AuthorType';

// FreeGenes Author Details API
const url = 'https://api.freegenes.org/authors/full/';

const author = {
  type: new Object(AuthorType),
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

export default author;