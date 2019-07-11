import { GraphQLList as List } from 'graphql';
import fetch from 'node-fetch';
import WellType from '../types/WellType';

// FreeGenes Wells API
const url = 'https://api.freegenes.org/wells/';
const TEN_MINUTES = 1000 * 60 * 10;

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const allWells = {
  type: new List(WellType),
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

export default allWells;