const Book = require("./bookmodel");

// CREATE BOOK

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

//LIST BOOKS
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

//UPDATE PUBLISHER
async function updatePublisher(req, res){
    try {
        const updatepb = await Book.update(
            { publisher: req.body.newPublisher },
            { where: { title: req.body.title } }
        );

        res.status(201).json({
            message: "publisher updated",
        });

        res.status(201).json({
            message: "publisher updated",
            book: pbresponse
        });
    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//DELETE BOOK
async function deleteBook(req, res){

}

// EXPORTS

module.exports = { 
    addBook,
    listAllBooks,
    updatePublisher,
    deleteBook 
};