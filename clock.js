window.addEventListener('DOMContentLoaded', showTime());

function showTime() {
  let date = new Date();

  // date.setTime(500000);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = 'AM';

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  if (h < 10) {
    h = '0' + h;
  }

  if (m < 10) {
    m = '0' + m;
  }

  if (s < 10) {
    s = '0' + s;
  }

  //   Ternary Operation
  //   h = h < 10 ? (h = '0' + h) : h;
  //   m = m < 10 ? (m = '0' + m) : m;
  //   s = s < 10 ? (s = '0' + s) : s;

  //   const time = h + ':' + m + ':' + s + '|' + '' + session;

  const time = `${h}:${m}:${s}|${session}`;

  //   console.log(time);

  document.getElementById('DisplayC').innerHTML = time;

  setTimeout(showTime, 1000);

  //   Change Background

  let bg;

  const userName = 'Saqib Patel';
  const user = document.getElementById('User');

  if (h < 8 && session === 'AM') {
    bg = 'url(/morning.jpg)';
    user.innerHTML = `Good Morning ${userName}`;
  } else if (h < 11 && session === 'AM') {
    bg = 'url(/day.jpg)';
    user.innerHTML = `Good Day ${userName}`;
  } else if (h < 8 && session === 'PM') {
    bg = ' url(/123.jpg)';
    user.innerHTML = `Good Afternoon ${userName}`;
  } else {
    bg = 'url(/night.jpg)';
    user.innerHTML = `Good Night ${userName}`;
  }

  // Insert Bg Image

  const body = document.querySelector('body');

  body.style.background = `${bg} center/cover no-repeat`;
}

document
  .querySelector('.focus-con input')
  .addEventListener('keypress', function () {
    if (event.key === 'Enter') {
      const focus = document.querySelector('.focus-con input');
      document.querySelector(
        '.focus-con'
      ).innerHTML = `<h6> TODAY: </h6> <h1>${focus.value}</h1>`;
    }
  });
