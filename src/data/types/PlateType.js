import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const PlateType = new ObjectType({
  name: 'Plate',
  fields: {
    breadcrumb: { type: new NonNull(StringType) },
    plate_form: { type: new NonNull(StringType) },
    plate_name: { type: new NonNull(StringType) },
    plate_type: { type: new NonNull(StringType) },
    plate_vendor_id: { type: StringType },
    protocol_uuid: { type: StringType },
    status: { type: new NonNull(StringType) },
    uuid: { type: new NonNull(StringType) },
  },
});

export default PlateType;
