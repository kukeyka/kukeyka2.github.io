// profile.js
document.addEventListener('DOMContentLoaded', () => {
    // Получаем данные пользователей
    let usersData = JSON.parse(localStorage.getItem('users')) || [];

    // Ищем текущего пользователя по его логину
    const currentUser = usersData.find(user => user.username === sessionStorage.getItem('currentUsername'));

    if (currentUser) {
        // Заполняем блоки данными пользователя
        document.querySelector('#usernameInfo1').textContent = currentUser.username;
        document.querySelector('#usernameInfo2').textContent = currentUser.username;
        document.querySelector('#emailInfo').textContent = currentUser.email;
        document.querySelector('#groupInfo').textContent = currentUser.grup;
        document.querySelector('#passwordInfo').textContent = currentUser.password;
    } else {
        alert('Ошибка загрузки данных пользователя.');
    }
});