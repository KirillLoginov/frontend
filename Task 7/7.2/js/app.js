let titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

let promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText; // заменяем текст в заголовке

let userAge = prompt('Ваш возраст');

let wrapper = document.getElementById('promoWrapper');

userAge = (userAge) || (wrapper);

if (userAge < 16) {
    wrapper.classList.remove('promo_wrapper');
    wrapper.classList.add('aquapark');
    wrapper.classList.toggle('promo_wrapper');
} else if (userAge < 35) {
    wrapper.classList.remove('promo_wrapper');
    wrapper.classList.add('club');
    wrapper.classList.toggle('promo_wrapper');
}
