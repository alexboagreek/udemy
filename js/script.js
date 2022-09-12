/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
    };

    // const adv = document.querySelectorAll('.item');
    // console.log(adv);

    // adv.forEach(elem => {
    //     elem.remove();
    // });
    //** удалили рекламные изображения со страницы */
    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');

    adv.forEach(item => {
    item.remove();
    });

    //** заменили заголовок фильма */
    genre.textContent = 'драма';

    //** заменили бекграунд изображения */
    poster.style.backgroundImage = 'url("img/bg.jpg")';

    //** очистили список фильмов  */
    movieList.innerHTML = '';

    //** отсортировали массив фильмов */ 
    movieDB.movies.sort();

    //** создали новый список фильмов при помощи магии*/
    movieDB.movies.forEach((movie, index) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${index + 1} ${movie}
            <div class="delete"></div>
        </li>
    `;
    });

});
