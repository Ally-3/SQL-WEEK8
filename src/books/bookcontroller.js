const Book = require("./bookmodel");

//1. CREATE BOOK - POST - adds a book to the DB
async function addBook(req, res) {
    try {
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publisher : req.body.publisher,
            genre : req.body.genre
        }

        const dbresponse = await Book.create(newBook);

        res.status(201).json({
            message : "book added to table",
            book : dbresponse
        })

    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//2. LIST BOOKS - GET - gets all books 
async function listAllBooks (req, res){
    try {
        const listOfBooks = await Book.findAll();
        res.status(200).json(listOfBooks);
    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//3. UPDATE PUBLISHER - PUT - updates a book's publisher 
async function updatePublisher(req, res){
    try {
        const updatepb = await Book.update(
            { publisher: req.body.newPublisher },
            { where: { title: req.body.title } }
        );

        res.status(201).json({
            message: "publisher updated",
            book: updatepb
        });
    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//4. DELETE BOOK - DELETE - deletes a single book by title 
async function deleteBook(req, res){
    try {
        const del = await Book.destroy({ 
            where: { title: req.body.title }
        });

        res.status(200).json({
            message: "book deleted",
            book: del
        });
    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//5 - DELETE - deletes all books 
async function deleteAllBooks(req, res){
    try {
        const delAll = await Book.destroy({
            truncate : true
        });

        res.status(200).json({
            message: "all books have been deleted",
            book: delAll
        });
    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//6 - GET - gets a book by author 
async function booksByAuthor (req, res){
    try {
        const findBooks = await Book.findAll({
            where : {
                author: req.body.author
            }
        });

        res.status(200).json(findBooks);

    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//7 - PUT - updates a book's genre
async function updateGenre(req, res){
    try {
        const updategenre = await Book.update(
            { genre: req.body.newGenre },
            { where: { title: req.body.title } }
        );

        res.status(201).json({
            message: "genre updated",
            book: updategenre
        });

    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}
//8 - PUT - updates a book's author 
async function updateAuthor(req, res){
    try {
        const updateauthor = await Book.update(
            { author: req.body.newAuthor },
            { where: { title: req.body.title } }
        );

        res.status(201).json({
            message: "author updated",
            book: updateauthor
        });

    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

// EXPORTS

module.exports = { 
    addBook,
    listAllBooks,
    updatePublisher,
    deleteBook,
    deleteAllBooks,
    booksByAuthor,
    updateGenre,
    updateAuthor 
};