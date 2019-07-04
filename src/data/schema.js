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
import collections from './queries/collections';
import parts from './queries/parts';
import authors from './queries/authors';
import plates from './queries/plates';
import plateDetails from './queries/plateDetails';
import wells from './queries/wells';
import wellDetails from './queries/wellDetails';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      //me,
      collections,
      parts,
      authors,
      plates,
      plateDetails,
      wells,
      wellDetails,
    },
  }),
});

export default schema;
