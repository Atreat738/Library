const bookTitleInput = document.querySelector('#BookTitle');
const authorInput = document.querySelector('#Author');
const pagesInput = document.querySelector('#Pages');
const readInput = document.querySelector('#Read');
const bookList = document.querySelector('#book-list');

const addBookButton = document.querySelector('#formSubmitBtn'); 
const readButton = document.querySelectorAll('.readButton');
const deleteBookButton = document.querySelectorAll('.deleteButton');

const theHobbit = new Book('The Hobbit', 'JRR Tolken', 295, 'No');
const underTheDome = new Book('Under The Dome', 'Stephen King', 1005, 'Yes');

let myLibrary = [theHobbit, underTheDome];
displayBook();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Create a function that stores input into myLibrary Array
function addBookToLibrary() {
    let title = bookTitleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = checkReadStatus(readInput);
    if (validate(title, author, pages) == true) {
        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook); 
        displayBook();
        clearForm();
    }
}

function checkReadStatus(readInput) {
    if (readInput.checked == true) {
        return read = 'Yes';
    } else if (readInput.checked == false) {
        return read = 'No';
    }
}

function clearForm() {
     bookTitleInput.value = "";
     authorInput.value = "";
     pagesInput.value = "";
}

addBookButton.addEventListener('click', addBookToLibrary);

//displayBook will loop through myLibrary
//forEach book in myLibrary
//display book in table
function displayBook() {
    bookList.innerText = "";
    myLibrary.forEach(function(Book) {
        //display the book title 
        let displayRow = document.createElement('tr');
        displayRow.textContent = Book.title;
        bookList.appendChild(displayRow);
        //display book author
        let displayAuthor = document.createElement('td');
        displayAuthor.textContent = Book.author;
        displayRow.appendChild(displayAuthor);
        //display pages
        let displayPages = document.createElement('td');
        displayPages.textContent = Book.pages;
        displayRow.appendChild(displayPages);
        //display read status
        let readCell = document.createElement('td')
        let displayRead = document.createElement('button');
        displayRead.textContent = Book.read;
        if(Book.read == 'Yes') {
            displayRead.classList.add('readYesButton');
            displayRead.classList.add('readButton');
        } else if(Book.read == 'No') {
            displayRead.classList.add('readNoButton');
            displayRead.classList.add('readButton');
        }
        displayRow.appendChild(readCell);
        readCell.appendChild(displayRead);
        //display delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        displayRow.appendChild(deleteButton);        
    });
}

 Book.prototype.toggleRead = function(currentBook) {
    if(currentBook.classList.contains('readButton')) {
            if(currentBook.classList.contains('readYesButton')) {
                currentBook.classList.remove('readYesButton');
                currentBook.textContent = 'No';
                return currentBook.classList.add('readNoButton'); 
            } else if (currentBook.classList.contains('readNoButton')) {
                currentBook.classList.remove('readNoButton');
                currentBook.textContent = 'Yes';
                return currentBook.classList.add('readYesButton'); 
        }
    }
 }

function deleteBook(currentBook) {
    if(currentBook.classList.contains('deleteButton')) {
        myLibrary.splice(myLibrary[currentBook], 1);
        currentBook.parentElement.remove(); 
    //console.log(myLibrary);
    }
}

bookList.addEventListener('click', (e) => {
    deleteBook(e.target);
    Book.prototype.toggleRead(e.target);
});

//Validation
function validate(title, author, pages) {
    if (bookTitleInput.value == "" || authorInput.value == "" || pagesInput.value == "") {
        alert('Please fill out all of the text fields');
    //The else If condition below tests if pagesInput is a whole number
    } else if (pagesInput.value % 1 != 0) {
        alert('Pages must be a whole number');
        return false;
    } else {
        return true;
    }
}





