const { Router } = require("express");

const bookRouter = Router();

const { addBook, listAllBooks, updatePublisher, deleteBook } = require("../books/bookcontroller");

//ROUTE 1 - CREATE BOOK - adds book to database
bookRouter.post("/addbook", addBook)

//ROUTE 2 - LIST BOOKS
bookRouter.get("/listallbooks", listAllBooks)

//ROUTE 3 - UPDATE PUBLISHER
bookRouter.put("/updatepublisher", updatePublisher)

//ROUTE 4 - DELETE BOOK
bookRouter.delete("/deletebook", deleteBook)

//EXPORT
module.exports = bookRouter;

