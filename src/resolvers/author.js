const { getAuthors, getAuthorById, addAuthor } = require('../dbAuthor');

const resolvers = {
  Query: {
    authors: () => getAuthors(),
    author: (_, { id }) => getAuthorById(id),
  },
  Mutation: {
    addAuthor: (_, { authorName, genre }) => {
      const author = { authorName, genre };
      return addAuthor(author);
    },
  },
};

module.exports = resolvers;
