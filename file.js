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
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    this.saveBooks();
    this.displayBooks();
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
      this.saveBooks();
      this.displayBooks();
    }
  }

  // display books
  displayBooks() {
    const bookList = document.getElementById('bookTable');
    bookList.innerHTML = '';
    this.books.forEach((book) => {
      const row = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.classList = 'one';
      const text = document.createTextNode(`${book.title} by ${book.author}`);
      const td2 = document.createElement('td');
      row.appendChild(td1);
      row.appendChild(td2);
      const removeBtn = document.createElement('button');
      removeBtn.innerText = 'Remove';
      removeBtn.classList = 'btn';
      removeBtn.addEventListener('click', () => this.removeBook(book));
      td1.appendChild(text);
      td2.appendChild(removeBtn);
      bookList.appendChild(row);
    });
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

const bookCollection = new BookCollection();

function addBook() {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  if (title === '' && author === '') {
    document.getElementById('errorMsg').innerHTML = 'Field must not be empty';
  } else {
    bookCollection.addBook(title, author);
    bookTitle.value = '';
    bookAuthor.value = '';
  }
}

document.getElementById('add').addEventListener('click', addBook);

// A Navigation bar.
function showSection(id) {
  const sections = document.querySelectorAll('main section');
  sections.forEach((section) => {
    if (section.id === id) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

document.getElementById('books-link').addEventListener('click', () => {
  showSection('books-section');
});

document.getElementById('add-book-link').addEventListener('click', () => {
  showSection('add-book-section');
});

document.getElementById('contact-link').addEventListener('click', () => {
  showSection('contact-section');
});

window.addEventListener('load', () => {
  bookCollection.displayBooks();
  showSection('books-section');
});

// active link
const link = document.querySelectorAll('.link');
function removeActive() {
  link.forEach((link) => {
    link.classList.remove('active');
  });
}

link.forEach((link) => {
  link.addEventListener('click', () => {
    removeActive();
    link.classList.add('active');
  });
});
