/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookauthor');
const addBtn = document.getElementById('add');

// Define the Book class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Define the BookManager class
class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayBooks() {
    const bookTable = document.getElementById('bookTable');
    bookTable.innerHTML = '';
    this.books.forEach((book) => {
      const row = document.createElement('tr');
      row.classList = 'row';
      row.innerHTML = `
        <td class = "one">${book.title} by ${book.author}</td>
        <td class = "two"><button onclick="removeBook('${book.title}')">Remove</button></td>
      `;
      bookTable.appendChild(row);
    });
  }
}

// Define the functions to add and remove books
addBtn.addEventListener('click', () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const book = new Book(title, author);
  bookManager.addBook(book);
  bookManager.displayBooks();
  bookTitle.value = '';
  bookAuthor.value = '';
});

function removeBook(title) {
  bookManager.removeBook(title);
  bookManager.displayBooks();
}

// Initialize the BookManager and display the existing books
const bookManager = new BookManager();
bookManager.displayBooks();