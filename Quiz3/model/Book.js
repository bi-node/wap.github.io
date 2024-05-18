let books = [];
let idCounter = books.length;

module.exports = class Book {
    constructor(bookId, title, author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    static getByAuthor(fname) {
        return books.filter(book => book.author.firstname.startsWith(fname));
    }

    static getByID(bookId) {
        let book = books.find(book => book.bookId === bookId)
        if (!book) {
            throw new Error(`Book not found with id ${bookId}`)
        }
        return book;
    }

    save() {
        this.bookId = ++idCounter;
        books.push(this);
        return this;
    }

    static deleteByID(bookId) {
        const index = books.findIndex(book => book.bookId === bookId);
        if (index <= -1) {
            throw new Error(`Book not found with id ${bookId}`)
        }

        return books.splice(index, 1)[0];
    }

    update() {
        const index = books.findIndex(book => book.bookId === this.bookId);
        if (index <= -1) {
            throw new Error(`Book not found with id ${this.bookId}`)
        }
        books[index] = this;
        return this;
    }
}