import { GraphQLSchema } from 'graphql';
import RootQueryType from './Query';
// import mutation from './Mutation';

export default new GraphQLSchema({
  query: RootQueryType,
  // mutation,
});
