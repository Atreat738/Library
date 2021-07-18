const bookTitleInput = document.querySelector('#BookTitle');
const authorInput = document.querySelector('#Author');
const pagesInput = document.querySelector('#Pages');
const readInput = document.querySelector('#Read');
const bookList = document.querySelector('#book-list');

const addBookButton = document.querySelector('#formSubmitBtn'); 
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
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    console.log(myLibrary);
    myLibrary.push(newBook); 
    displayBook();
    clearForm();
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
            //display the book.title 
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
            let displayRead = document.createElement('td');
            displayRead.textContent = Book.read;
            displayRow.appendChild(displayRead);
            //display delete button
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('deleteButton');
            displayRow.appendChild(deleteButton);
        
    });

}


// function deleteBook(currentBook) {
//     currentBook = this.Book;  
//     console.log(currentBook);
//     this.title = null;
//     this.author = null;
//     this.pages = null;
//     this.read = null;
//     this.deleteButton = null;
// }

// deleteBookButton.addEventListener('click', deleteBook);

// function checkbox() {
//     let checked = false;
//     if(document.querySelector('#Read:checked')) {
//         checked = true;
//     }
// }



