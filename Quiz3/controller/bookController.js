const Book = require("../model/Book")

exports.getAll = (req, res) => {
    if (req.query['firstname']) {
        res.status(200).json(Book.getByAuthor(req.query['firstname']))
    } else {
        res.status(200).json(Book.getAll())
    }
}

exports.getByID = (req, res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(Book.getByID(id))
}

exports.save = (req, res) => {
    const newBook = new Book(null, req.body.title, req.body.author).save();
    res.status(201).json(newBook)
}

exports.deleteByID = (req, res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(Book.deleteByID(id))
}

exports.update = (req, res) => {
    let updatedBook = new Book(null, req.body.title, req.body.author);
    updatedBook.bookId = parseInt(req.params.id);
    updatedBook.update();
    res.status(204).end();
}
