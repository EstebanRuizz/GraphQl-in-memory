let books = [
    { id: 1, title: "Book 1", author: "Author 1", genre: "Fiction" },
    { id: 2, title: "Book 2", author: "Author 2", genre: "Non-Fiction" },
    { id: 3, title: "Book 3", author: "Author 3", genre: "Mystery" },
    { id: 4, title: "My Book ", author: "Rubian", genre: "Mystery" },
  ];
  
  const getNextId = () => {
    const ids = books.map((book) => book.id);
    return ids.length ? Math.max(...ids) + 1 : 1;
  };
  
  const getBooks = () => books;
  
  const getBookById = (id) => books.find((book) => book.id === id);
  
  const addBook = (book) => {
    const id = getNextId();
    book.id = id;
    books.push(book);
    return book;
  };
  
  module.exports = { getBooks, getBookById, addBook };
  