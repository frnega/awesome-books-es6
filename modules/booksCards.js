/* eslint-disable import/prefer-default-export */
import Books from './Books.js';

const bookTitle = document.querySelector('#title');
const author = document.querySelector('#author');
const submitButton = document.querySelector('#submit');

export const books = new Books();
books.displaybooks();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (bookTitle.value.trim() !== '' && author.value.trim() !== '') {
    const list = {
      title: bookTitle.value,
      author: author.value,
    };
    books.add(list);
    books.setLocalStorage();
    books.displaybooks(books);
    bookTitle.value = '';
    author.value = '';
  }
});