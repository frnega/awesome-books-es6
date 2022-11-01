/* eslint-disable no-unused-vars */
import showContents from './modules/showContent.js';
import setDateAndTime from './modules/setDateAndTime.js';
import { books } from './modules/booksCards.js';

const navLinks = document.querySelectorAll('header nav ul li');
navLinks.forEach((ele) => {
  ele.addEventListener('click', () => {
    showContents(ele);
  });
});