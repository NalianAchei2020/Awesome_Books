/* eslint-disable no-use-before-define */
const books = [];

function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  books.forEach((book) => {
    const li = document.createElement('li');
    const text = document.createTextNode(`${book.title} by ${book.author}`);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', () => removeBook(book));
    li.appendChild(text);
    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = {
    title,
    author,
  };
  books.push(book);
  displayBooks();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

function removeBook(book) {
  const index = books.indexOf(book);
  if (index > -1) {
    books.splice(index, 1);
  }
  displayBooks();
}

document.getElementById('add-btn').addEventListener('click', addBook);