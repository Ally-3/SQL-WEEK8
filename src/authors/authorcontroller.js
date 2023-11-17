const Author = require("./authormodel");
const Book = require("../books/bookmodel");

//ROUTE 9 - POST - adds an author to the DB 
async function addAuthor(req, res) {
    try {
        const newAuthor = {
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
        const findAuthor = req.body.author;
        console.log(findAuthor)
        const author = await Author.findOne({
            where : { author : findAuthor}
        })
        console.log(author)
        const books = await Book.findAll({
            where : { author_ID : author.author_ID}
        })
     
        res.status(200).json(books);
    
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