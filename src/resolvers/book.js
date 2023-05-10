const { getBooks, getBookById, addBook } = require("../db");

const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, { id }) => getBookById(id),
  },
  Mutation: {
    addBook: (_, { title, author, genre }) => {
      const book = { title, author, genre };
      return addBook(book);
    },
  },
};

module.exports = resolvers;
