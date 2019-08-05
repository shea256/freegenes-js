import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
  GraphQLList as ListType,
} from 'graphql';

const PlateType = new ObjectType({
  name: 'Plate',
  fields: {
    breadcrumb: { type: StringType },
    plate_form: { type: new NonNull(StringType) },
    plate_name: { type: new NonNull(StringType) },
    plate_type: { type: new NonNull(StringType) },
    plate_vendor_id: { type: StringType },
    protocol_uuid: { type: StringType },
    status: { type: new NonNull(StringType) },
    container_uuid: { type: new NonNull(StringType) },
    uuid: { type: new NonNull(StringType) },
    wells: { type: new ListType(StringType) },
    notes: { type: StringType },
    thaw_count: { type: IntType },
  },
});

export default PlateType;
