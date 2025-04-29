document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    const loginMessage = document.querySelector('#loginMessage');

    loginForm.addEventListener('submit', event => {
        event.preventDefault();

        const username = document.querySelector('#usernameLogin').value.trim();
        const password = document.querySelector('#passwordLogin').value.trim();

        let usersData = JSON.parse(localStorage.getItem('users')) || [];

        // Поиск пользователя по логину и паролю
        const foundUser = usersData.find(user => user.username === username && user.password === password);

        if (foundUser) {
            sessionStorage.setItem('currentUsername', foundUser.username); // Установим токен пользователя
            window.location.href = 'index4.html'; // Перейдем на профиль
        } else {
            loginMessage.textContent = 'Неверный логин или пароль.';
        }
    });
});