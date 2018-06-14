import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';

import users from './types';

const findUser = {
  type: users,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_, { id }, { loaders }) => {
    try {
      return loaders.person.load(id);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    findUser,
  },
});
