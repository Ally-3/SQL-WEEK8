const Author = require("./authormodel");
const Book = require("../books/bookmodel");

//ROUTE 9 - POST - adds an author to the DB 
async function addAuthor(req, res) {
    try {
        const newAuthor = {
            author_ID : [],
            author : req.body.author
        }

        const addAuthorResponse = await Author.create(newAuthor);

        res.status(201).json({
            message : "author added to database",
            author : addAuthorResponse
        })

    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//ROUTE 10 - GET - gets a single author by author name and retrieves associated books
async function assoBooksByAuthor (req, res){
    try {
        const findAuthor = req.query.author;

        const findBooksByAuthor = await Author.findOne({
            where : {
                author: findAuthor
            },
            include : [Book],
        });

        res.status(200).json(findBooksbyAuthor);
    
    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        });
    }
}

// EXPORTS
module.exports = { 
    addAuthor, 
    assoBooksByAuthor
};