import { DateTime } from '../luxon.js';

const time = document.querySelector('.time');
export default setInterval(() => {
  const now = DateTime.now();
  time.innerText = now.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });
}, 1000);