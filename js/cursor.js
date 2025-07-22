document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  cursor.innerHTML = `<img src="images/coffee-icon-black.png" alt="cursor">`;
  document.body.appendChild(cursor);
  const cursorImg = cursor.querySelector('img');
  const normalImg = 'images/coffee-icon-black.png';
  const waterImg = 'images/coffee-splash-icon-black.png';
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
  document.addEventListener('click', () => {
    cursorImg.src = waterImg;
    setTimeout(() => {
      cursorImg.src = normalImg;
    }, 200);
  });
});
