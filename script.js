"use strict";
let img1El = document.getElementsByClassName("img1");
let img2El = document.getElementsByClassName("img2");
let titleEl = document.querySelector("h1");

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

img1El[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
img2El[0].setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) titleEl.innerText = "🚩Player 1 Wins!";
else if (randomNumber2 > randomNumber1) titleEl.innerText = "Player 2 Wins!🚩";
else titleEl.innerText = "Draw!";
