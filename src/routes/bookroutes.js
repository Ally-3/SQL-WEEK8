const { Router } = require("express");

const bookRouter = Router();

const { addBook, listAllBooks, updatePublisher, deleteBook, deleteAllBooks, booksByAuthor, updateGenre, updateAuthor } = require("../books/bookcontroller");

//ROUTE 1 - CREATE BOOK - adds book to database
bookRouter.post("/addbook", addBook)

//ROUTE 2 - LIST BOOKS
bookRouter.get("/listallbooks", listAllBooks)

//ROUTE 3 - UPDATE PUBLISHER
bookRouter.put("/updatepublisher", updatePublisher)

//ROUTE 4 - DELETE BOOK
bookRouter.delete("/deletebook", deleteBook)

//ROUTE 5 - DELETE - deletes all books 
bookRouter.delete("/deleteallbooks", deleteAllBooks)

//ROUTE 6 - GET - gets a book by author 
bookRouter.get("/booksbyauthor", booksByAuthor)

//ROUTE 7 - PUT - updates a book's genre
bookRouter.put("/updategenre", updateGenre)

//ROUTE 8 - PUT - updates a book's author 
bookRouter.put("/updateauthor", updateAuthor)

//EXPORT
module.exports = bookRouter;

