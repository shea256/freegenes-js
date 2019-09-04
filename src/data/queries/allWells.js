import { GraphQLList as ListType, GraphQLInt as IntType } from 'graphql';
import fetch from 'node-fetch';
import WellType from '../types/WellType';
import filterItems from '../../utils/filterItems';

// FreeGenes Wells API
const url = 'https://api.freegenes.org/wells/';
const TEN_MINUTES = 1000 * 60 * 10;

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const allWells = {
  type: new ListType(WellType),
  args: {
    first: { type: IntType },
    skip: { type: IntType },
  },
  resolve(_, { first, skip }) {
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
          return filterItems(items, first, skip);
        })
        .catch(err => {
          lastFetchTask = null;
          throw err;
        });

      if (items.length) {
        return filterItems(items, first, skip);
      }

      return lastFetchTask;
    }

    // It has been less than 10 minutes since the last execution
    // Return the items from the last execution
    return filterItems(items, first, skip);
  },
};

export default allWells;
