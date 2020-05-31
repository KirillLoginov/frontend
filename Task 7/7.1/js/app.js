let userName = prompt('Как к Вам обращаться?');

userName = (userName) || ('мой друг');

let titleText = 'Привет, ' + userName + '! Добро пожаловать на сайт группы отелей Selly Hotels!';

let promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы

promoTitle.innerText = titleText; // заменяем текст в заголовке
