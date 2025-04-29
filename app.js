// register.js (или ваш аналогичный файл)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registrationForm');
    const messageBox = document.querySelector('#message');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const username = document.querySelector('#username').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const grup = document.querySelector('#grup').value.trim();

        if (!username || !email || !password || !grup) {
            messageBox.textContent = 'Заполните все поля!';
            return;
        }

        let usersData = JSON.parse(localStorage.getItem('users')) || [];

        // Проверка уникальности пользователя
        const existingUser = usersData.find(user => user.username === username || user.email === email);

        if (existingUser) {
            messageBox.textContent = 'Такой пользователь уже зарегистрирован.';
            return;
        }

        // Добавляем нового пользователя
        usersData.push({ username, email, password, grup });
        localStorage.setItem('users', JSON.stringify(usersData)); // Ключ должен быть именно 'users'

        alert('Вы успешно зарегистрированы!');
        setTimeout(() => { location.reload(); }, 1000);
    });
});