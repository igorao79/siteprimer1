// Получаем первый элемент details
const firstDetails = document.querySelector('.blocktwo__details');

// Добавляем обработчик события 'click' на первый элемент
firstDetails.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем действие при клике
});