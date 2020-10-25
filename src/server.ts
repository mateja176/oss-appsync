import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import { ApolloServer, gql, IResolvers } from 'apollo-server';
import fs from 'fs';
import { join } from 'path';
import { resolvers } from './generated/resolver';

const typeDefs = gql(
  fs.readFileSync(join(__dirname, 'generated', 'schema.graphql'), {
    encoding: 'utf8',
  }),
);

const server = new ApolloServer({
  typeDefs: [DIRECTIVES, typeDefs],
  resolvers: resolvers as IResolvers,
});

export default server;
