import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const AuthorType = new ObjectType({
  name: 'Author',
  fields: {
    affiliation: { type: new NonNull(StringType) },
    email: { type: new NonNull(StringType) },
    name: { type: new NonNull(StringType) },
    uuid: { type: new NonNull(StringType) },
  },
});

export default AuthorType;
