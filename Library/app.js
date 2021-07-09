
const theHobbit = new Book('The Hobbit', 'JRR Tolken', 295, false);
const underTheDome = new Book('Under The Dome', 'Stephen King', 1005, true);

let myLibrary = [];

function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
}

//Create a function that stores input into myLibrary Array

function addBookToLibrary() {
    myLibrary.pop(Book());
}


// Book.prototype.info = function() {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
// }


// console.log(theHobbit.info());