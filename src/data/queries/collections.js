import { GraphQLList as List } from 'graphql';
import fetch from 'node-fetch';
import CollectionType from '../types/CollectionType';

// FreeGenes Collections API
const url = 'https://api.freegenes.org/collections/';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const collections = {
  type: new List(CollectionType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          items = data;
          lastFetchTask = null;
          return items;
        })
        .catch(err => {
          lastFetchTask = null;
          throw err;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default collections;
