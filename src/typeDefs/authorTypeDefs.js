const { gql } = require("apollo-server-express");

const authorTypeDefs = gql`
  type Author {
    id: ID!
    authorName: String
    genre: String
  }
  
  type Query {
    authors: [Author!]!
    author(id: ID!): Author
  }

  type Mutation {
    addAuthor( authorName: String!, genre: String!): Author!
  }
`;
 
module.exports = authorTypeDefs;
