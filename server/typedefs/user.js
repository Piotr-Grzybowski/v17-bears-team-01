const { gql } = require('apollo-server-express');

//Mutations for saved
module.exports = gql`
  type Query {
    getUser: User
    getUsers(id: ID!): [User]
  }

  type Mutation {
    register(
      email: String!
      password: String!
      name: String!
      timezone: String!
    ): User
    login(provider: String!, email: String!, password: String!): User
    logout: Boolean
  }

  type User {
    id: ID!
    email: String!
    name: String!
  }
`;
