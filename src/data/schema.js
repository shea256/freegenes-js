/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

//import me from './queries/me';
import allAuthors from './queries/allAuthors';
import allCollections from './queries/allCollections';
import allParts from './queries/allParts';

import allPlates from './queries/allPlates';
import allWells from './queries/allWells';

import plate from './queries/plate';
import well from './queries/well';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      allAuthors,
      allCollections,
      allParts,
      allPlates,
      allWells,
      plate,
      well,
    },
  }),
});

export default schema;
