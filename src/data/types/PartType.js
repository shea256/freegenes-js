import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as ListType,
} from 'graphql';

const PartType = new ObjectType({
  name: 'Part',
  fields: {
    author_uuid: { type: StringType },
    collection_id: { type: new NonNull(StringType) },
    description: { type: StringType },
    full_sequence: { type: StringType },
    gene_id: { type: new NonNull(StringType) },
    name: { type: new NonNull(StringType) },
    optimized_sequence: { type: StringType },
    original_sequence: { type: StringType },
    part_type: { type: new NonNull(StringType) },
    status: { type: StringType },
    synthesized_sequence: { type: StringType },
    tags: { type: new ListType(StringType) },
    time_created: { type: new NonNull(StringType) },
    time_updated: { type: StringType },
    uuid: { type: new NonNull(StringType) },
    vbd: { type: StringType },
  },
});

export default PartType;
