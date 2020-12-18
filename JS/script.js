"use strict";

let numberOfFilms;

function start() {
 numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

 while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
 }

}

start();

let PersonalMoviesDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};





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

 function rememberMyFilms() {
    for (let a = 0; a < 2; a++) {
        const question1 = prompt('Один из последних просмотренных фильмов?');
        const question2 = prompt('Насколько оцените его?');
         if (question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length < 50 && question2.length < 50) {
             PersonalMoviesDB.movies[question1] = question2;
         }else {
            a--;
         }
     }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (PersonalMoviesDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (PersonalMoviesDB.count >= 10 && PersonalMoviesDB.count < 30) {
        alert('Вы классический зритель');
    } else if (PersonalMoviesDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB() {
    if(PersonalMoviesDB.privat == false) {
        console.log(PersonalMoviesDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let a = 0; a < 3; a++) {
        const question1 = prompt(`Ваш любимый жанр по номером ${a+1}?`);
         if (question1 != null && question1 != '' && question1.length < 50) {
             PersonalMoviesDB.genres[a] = question1;
         }else {
            a--;
         }
     }
}

writeYourGenres();