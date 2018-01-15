/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Variable worden aangemaakt
var bookButton1 = document.querySelector('article:nth-of-type(1) div button');
var bookButton2 = document.querySelector('article:nth-of-type(2) div button');
var bookButton3 = document.querySelector('article:nth-of-type(3) div button');
var bookHead = document.querySelector('nav ul li:nth-of-type(2) a img');


var likeButton = document.querySelector('aside div button:nth-of-type(1)');





//header krijgt nieuwe background image


//background image veranderen wanneer je erop klikt, class wissel of toggle



bookButton1.addEventListener('click', function () {
    bookButton1.classList.toggle('bookied');
    bookHead.classList.toggle('bookheaded');

});

bookButton2.addEventListener('click', function () {
    bookButton2.classList.toggle('bookied');
    bookHead.classList.toggle('bookheaded');

});
bookButton3.addEventListener('click', function () {
    bookButton3.classList.toggle('bookied');
    bookHead.classList.toggle('bookheaded');

});

//In favorieten zetten
likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('liked');
});


//aan het downloaden
//downloadButton.addEventListener('click', function () {
   // downloaden.classList.toggle('download');
//});

//downloadButton.addEventListener('click', function () {
   // downloadButton.classList.toggle('gedownload');
//});

//Bij reactie een like geven
//reactieLiken.addEventListener('click', function (e) {
  //  e.preventDefault();
   // reactieLiken.classList.toggle('reactielikegeven');
//});

//Op een bericht liken
//berichtLiken.addEventListener('click', function (e) {
  //  e.preventDefault();
    //berichtLiken.classList.toggle('berichtlikegeven');
//});
