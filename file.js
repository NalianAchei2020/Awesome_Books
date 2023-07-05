/* eslint-disable no-use-before-define */
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookauthor');
const addButton = document.getElementById('add');
const main = document.querySelector('.main');

let books = JSON.parse(localStorage.getItem('books')) || [];

const addBook = (title, author) => {
  const id = Math.floor(Math.random() * 1000);
  const book = { title, author, id };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  display();
};
const removeBook = (id) => {
  books = books.filter((book) => book.id !== id);
  localStorage.setItem('books', JSON.stringify(books));
  display();
};
const display = () => {
  main.innerHTML = '';
  books.forEach((book) => {
    const span = document.createElement('span');
    span.textContent = `${book.title} by ${book.author}`;
    const br = document.createElement('br');
    span.appendChild(br);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeBook(book.id));
    span.appendChild(removeButton);
    const line = document.createElement('hr');
    span.appendChild(line);
    main.appendChild(span);
  });
};
addButton.addEventListener('click', () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  addBook(title, author);
  bookTitle.value = '';
  bookAuthor.value = '';
});

display();