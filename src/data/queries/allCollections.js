import { GraphQLList as List } from 'graphql';
import fetch from 'node-fetch';
import CollectionType from '../types/CollectionType';

// FreeGenes Collections API
const url = 'https://api.freegenes.org/collections/';
const TEN_MINUTES = 1000 * 60 * 10;

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const allCollections = {
  type: new List(CollectionType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > TEN_MINUTES || items.length === 0) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          items = data;
          lastFetchTask = null;
          return items;
        })
        .catch((/* err */) => {
          lastFetchTask = null;
          // console.log(err);
          // throw err;
          items = [];
          return items;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default allCollections;
