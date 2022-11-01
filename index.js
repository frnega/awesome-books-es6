/* eslint-disable no-unused-vars */
import showContents from './modules/showContent.js';
import DateAndTime from './modules/DateAndTime.js';
import { books } from './modules/booksdetail.js';

const navLinks = document.querySelectorAll('header nav ul li');
navLinks.forEach((ele) => {
  ele.addEventListener('click', () => {
    showContents(ele);
  });
});