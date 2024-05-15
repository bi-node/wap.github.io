let books = [
    { id: 1, title: 'To kill the mocking bird', isbn: '222-584-18', publishedDate: '11/08/1984', author: "Harper Lee" },
    { id: 2, title: 'The Godfather', isbn: '113-485-11', publishedDate: '02/05/2019', author: "Mario Puzo" },
    { id: 3, title: 'Good, Bad and the Ugly', isbn: '563-555-18', publishedDate: '07/25/1989', author: "Sergio Leone" }
];
let idCounter = 4;

module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    static getBookById(id) {
        const book = books.find(book => book.id === id);
        if (book) {
            return book;
        } else {
            throw new Error(`No Book found with Id: ${id}`);
        }
    }

    save() {
        this.id = idCounter++;
        books.push(this);
        return this.id; // Return the assigned ID
    }

    static deleteById(id) {
        const index = books.findIndex(book => book.id === id);
        if (index > -1) {
            return books.splice(index, 1)[0];
        } else {
            throw new Error(`No Book found with Id: ${id}`);
        }
    }

    update() {
        const index = books.findIndex(book => book.id === this.id);
        if (index > -1) {
            console.log("bi");
            
            books[index] = this;
        } else {
            throw new Error(`No Book found with Id: ${this.id}`);
        }
    }
}
