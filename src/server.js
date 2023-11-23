require("dotenv").config();
const express = require("express");
const app = express();

// FRONTEND
const cors = require("cors");

// CONNECTING PORT
const port = process.env.PORT || 5002;

// IMPORTING - BOOKS
const Book = require("./books/bookmodel");
const bookRouter = require("./routes/bookroutes");

// IMPORTING - AUTHORS
const Author = require("./authors/authormodel");
const authorRouter = require("./routes/authorroutes");

// IMPORTING - GENRES
const Genre = require("./genres/genremodel");
const genreRouter = require("./routes/genreroutes");

// SYNCING TABLES
function syncTables() {
    Author.hasMany(Book) //ASSOCIATIONS
    Book.belongsTo(Author)

    Genre.hasMany(Book)
    Book.belongsTo(Genre)

    Book.sync({ alter: true });
    Author.sync({ alter: true });
    Genre.sync({ alter: true });
}

// MIDDLEWARE SETUP - CONNECTING TO REACT FRONT END LATER
app.use(cors());

// MIDDLEWARE SETUP - ALLOWS APP TO USE JSON THUNDERCLIENT
app.use(express.json());

// CONNECTION TO ROUTING TABLE THROUGH ROUTES
app.use(bookRouter, authorRouter, genreRouter);

// HEALTH ROUTE - BASIC TEST TO SEE IF SERVER IS WORKING AND HELPING DIAGNOSE
app.get("/health", (req, res) => res.status(200).json({ message: "server is alive" }));

// LISTENER FUNCTION
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
  syncTables();
});