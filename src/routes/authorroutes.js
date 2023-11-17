const { Router } = require("express");

const authorRouter = Router();

const { addAuthor, assoBooksByAuthor } = require("../authors/authorcontroller");

//ROUTE 9 - POST - adds an author to the DB 
authorRouter.post("/addauthor", addAuthor)

//ROUTE 10 - GET - gets a single author by author name and retrieves associated books
authorRouter.get("/assobooksbyauthor", assoBooksByAuthor)

//EXPORT
module.exports = authorRouter;