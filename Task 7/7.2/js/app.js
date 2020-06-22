let titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

let promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText; // заменяем текст в заголовке

let userAge = prompt('Ваш возраст');

let wrapper = document.getElementById('promoWrapper');

userAge = (userAge) || 35;

if (userAge < 16) {
    wrapper.classList.add('aquapark');
} else if (userAge < 35) {
    wrapper.classList.add('club');
}
