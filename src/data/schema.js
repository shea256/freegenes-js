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
import wells from './queries/wells';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      //me,
      collections,
      parts,
      authors,
      plates,
      wells
    },
  }),
});

export default schema;
