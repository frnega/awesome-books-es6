const form = document.querySelector('form');
const contact = document.querySelector('#contact');
const booksList = document.querySelector('#books-list');

export default (id) => {
  document.querySelectorAll('header ul li').forEach((ele) => ele.classList.remove('active'));
  id.classList.add('active');
  switch (id.getAttribute('data-link')) {
    case 'list':
      booksList.style.display = 'block';
      form.style.display = 'none';
      contact.style.display = 'none';
      break;
    case 'add-new':
      booksList.style.display = 'none';
      form.style.display = 'flex';
      contact.style.display = 'none';
      break;
    case 'contact':
      booksList.style.display = 'none';
      form.style.display = 'none';
      contact.style.display = 'block';
      break;
    default:
      booksList.style.display = 'block';
      form.style.display = 'none';
      contact.style.display = 'none';
  }
};