"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

let question1 = '0';
let question2 = '0';

let PersonalMoviesDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

for (let a = 0; a < 2; a++) {
    question1 = prompt('Один из последних просмотренных фильмов?');
    question2 = +prompt('Насколько оцените его?');
    if(question1 != null && question2 != null && question1 != '' && question2 != '' && question1 < 50 && question2 < 50) {
        PersonalMoviesDB.movies[question1] = question2;
    } else {
        a--;
    }
}


// let a = 0;
// while (a < 2) {
//     question1 = prompt('Один из последних просмотренных фильмов?');
//     question2 = +prompt('Насколько оцените его?');
//     PersonalMoviesDB.movies[question1] = question2;
//     a++;
// }


// let a = 0;
// do {
//     question1 = prompt('Один из последних просмотренных фильмов?');
//     question2 = +prompt('Насколько оцените его?');
//     PersonalMoviesDB.movies[question1] = question2;
//     a++;
// } while (a < 2);


//const question1 = prompt('Один из последних просмотренных фильмов?'),
 //question2 = +prompt('Насколько оцените его?'),
 //question3 = prompt('Один из последних просмотренных фильмов?'),
 //question4 = +prompt('Насколько оцените его?');


if (PersonalMoviesDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (PersonalMoviesDB.count >= 10 && PersonalMoviesDB.count < 30) {
    alert('Вы классический зритель');
} else if (PersonalMoviesDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(PersonalMoviesDB);