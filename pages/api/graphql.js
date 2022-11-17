import { createYoga, createSchema } from 'graphql-yoga';
import typeDefs from '../../schema/typeDefs';
import resolvers from '../../schema/resolvers';


const schema = createSchema({
  typeDefs,
  resolvers,
});

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
});
