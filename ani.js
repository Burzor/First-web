for (let i = 0; i < 10; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.top = `${Math.random() * 100}%`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDelay = `${Math.random() * 5}s`;
  document.body.appendChild(heart);
}