let titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

let promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText; // заменяем текст в заголовке

let button = document.getElementById('showAllFeedbacks');
button.addEventListener('click', showAllFeedbacks);

function showAllFeedbacks() {
    button.style.display = 'none';
    let hiddenFeedbacks = document.getElementById('hiddenFeedbacks');
    hiddenFeedbacks.classList.remove('hidden');
}
