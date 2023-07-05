/* eslint-disable max-classes-per-file */
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookauthor');

// Define the Book class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    this.displayBooks();
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
      this.displayBooks();
    }
  }

  displayBooks() {
    const bookList = document.getElementById('bookTable');
    bookList.innerHTML = '';
    this.books.forEach((book) => {
      const li = document.createElement('li');
      const text = document.createTextNode(`${book.title} by ${book.author}`);
      const removeBtn = document.createElement('button');
      removeBtn.innerText = 'Remove';
      removeBtn.addEventListener('click', () => this.removeBook(book));
      li.appendChild(text);
      li.appendChild(removeBtn);
      bookList.appendChild(li);
    });
  }
}

const bookCollection = new BookCollection();

function addBook() {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  bookCollection.addBook(title, author);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

document.getElementById('add').addEventListener('click', addBook);