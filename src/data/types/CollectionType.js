import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as ListType,
} from 'graphql';

const CollectionType = new ObjectType({
  name: 'Collection',
  fields: {
    name: { type: new NonNull(StringType) },
    parent_uuid: { type: StringType },
    readme: { type: new NonNull(StringType) },
    tags: { type: new ListType(StringType) },
    time_created: { type: new NonNull(StringType) },
    time_updated: { type: StringType },
    uuid: { type: new NonNull(StringType) },
    parts: { type: new ListType(StringType) },
  },
});

export default CollectionType;
