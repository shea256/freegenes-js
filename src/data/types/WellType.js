import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLFloat as FloatType,
  GraphQLList as ListType,
} from 'graphql';

const WellType = new ObjectType({
  name: 'Well',
  fields: {
    address: { type: new NonNull(StringType) },
    media: { type: new NonNull(StringType) },
    organism: { type: StringType },
    organism_uuid: { type: StringType },
    plate_uuid: { type: new NonNull(StringType) },
    quantity: { type: StringType },
    uuid: { type: new NonNull(StringType) },
    volume: { type: new NonNull(FloatType) },
    samples: { type: new ListType(StringType) },
  },
});

export default WellType;