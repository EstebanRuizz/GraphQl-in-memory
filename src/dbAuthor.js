let authors = [
    { id:1, authorName:"ana", genre:"female" },
  ];
  
  const getNextId = () => {
    const ids = authors.map((author) => author.id);
    return ids.length ? Math.max(...ids) + 1 : 1;
  };
   
  const getAuthors = () => authors;
  
  const getAuthorById = (id) => authors.find((author) => author.id === id);
  
  const addAuthor = (author) => {
    const id = getNextId();
    author.id = id;
    authors.push(author);
    return author;
  };
  
  module.exports = { getAuthors, getAuthorById, addAuthor };
  