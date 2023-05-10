const { gql } = require("apollo-server-express");

const bookTypeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
    genre: String
  }
  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }
  type Mutation {
    addBook(title: String!, author: String!, genre: String!): Book!
  }
`;

module.exports = bookTypeDefs;
