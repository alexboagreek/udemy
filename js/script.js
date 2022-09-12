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
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    //** навесили обработчик событий на форму */

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newMovie = addInput.value;
        const favorite = checkbox.checked;

        if (newMovie) {

            if (newMovie.length > 21) {
                newMovie = `${newMovie.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм...');
            }
            
            movieDB.movies.push(newMovie);
            // movieDB.movies.sort();
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    // deleteAdv(adv);

    const makeChanges = () => {
        //** заменили заголовок фильма */
        genre.textContent = 'драма';

        //** заменили бекграунд изображения */
        poster.style.backgroundImage = 'url("img/bg.jpg")';
        //** отсортировали массив фильмов */ 
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    // sortArr(movieDB.movies);

    function createMovieList(movies, parent) {
        //** очистили список фильмов  */
        parent.innerHTML = '';
        sortArr(movies);

        //** создали новый список фильмов при помощи магии*/
        movies.forEach((movie, index) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1} ${movie}
                <div class="delete"></div>
            </li>
        `;

        //** функционал удаления фильма по кнопке корзина */

        document.querySelectorAll('.delete').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(index, 1);

                createMovieList(movies, parent);
            });
        });
    });
    
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});
