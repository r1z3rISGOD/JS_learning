"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
const question1 = prompt('Один из последних просмотренных фильмов?'),
 question2 = +prompt('Насколько оцените его?'),
 question3 = prompt('Один из последних просмотренных фильмов?'),
 question4 = +prompt('Насколько оцените его?');


let PersonalMoviesDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

PersonalMoviesDB.movies[question1] = question2;
PersonalMoviesDB.movies[question3] = question4;

console.log(PersonalMoviesDB);