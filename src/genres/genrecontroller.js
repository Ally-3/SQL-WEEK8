const Genre = require("../genres/genremodel");
const Book = require("../books/bookmodel");

//ROUTE 11 - POST - adds an genre to the db
async function addGenre(req, res) {
    try {
        const newGenre = {
            genre : req.body.genre
        }

        const genreResponse = await Genre.create(newGenre);

        res.status(201).json({
            message : "genre added to database",
            author : genreResponse
        })

    } catch (error) {
        res.status(501).json({ 
            message: error.message, 
            error: error
        })
    }
}

//ROUTE 12 - GET - gets a single genre by genre name and retrieves associated books
async function assoBooksByGenre (req, res){
    try {
        const findGenre = req.body.genre;
        console.log(findGenre)
        const genre = await Genre.findOne({
            where : { genre : findGenre}
        })
        console.log(genre)
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
    addGenre, 
    assoBooksByGenre
};