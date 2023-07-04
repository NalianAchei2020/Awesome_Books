/* eslint-disable no-use-before-define */
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookauthor');
const addButton = document.getElementById('add');
const main = document.querySelector('.main');

let books = JSON.parse(localStorage.getItem('books')) || [];

const addBook = (title, author) => {
  const book = { title, author };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  display();
};
const removeBook = (title) => {
  books = books.filter((book) => book.title !== title);
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
    removeButton.addEventListener('click', () => removeBook(book.title));
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