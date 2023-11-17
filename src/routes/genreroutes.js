const { Router } = require("express");

const genreRouter = Router();

const { addGenre, assoBooksByGenre } = require("../genres/genrecontroller");

//ROUTE 11 - POST - adds an genre to the db
genreRouter.post("/addgenre", addGenre)

//ROUTE 12 - GET - gets a single genre by genre name and retrieves associated books 
genreRouter.get("/assobooksbygenre", assoBooksByGenre)

//EXPORT
module.exports = genreRouter;