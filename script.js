const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add your login logic here
    console.log(`Username: ${username}, Password: ${password}`);
});

for (let i = 0; i < 10; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.top = `${Math.random() * 100}%`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDelay = `${Math.random() * 5}s`;
  document.body.appendChild(heart);
}