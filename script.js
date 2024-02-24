const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = usernameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;

      // Username validation
      const usernamePattern = /^[A-Z][a-zA-Z0-9]*[0-9][a-zA-Z0-9]*$/;
      if (!usernamePattern.test(username)) {
        document.getElementById('usernameError').innerText = 'Username must start with an uppercase letter and contain at least one digit.';
      } else {
        document.getElementById('usernameError').innerText = '';
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
      } else {
        document.getElementById('emailError').innerText = '';
      }

      // Password validation
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z.,;:])[a-zA-Z0-9.,;:]{8,20}$/;
      if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must be 8 to 20 characters long and contain at least one uppercase letter, one lowercase letter, and one special character excluding [. (dot), ,(comma), ;(semicolon), : (colon)].';
      } else {
        document.getElementById('passwordError').innerText = '';
      }
    });
