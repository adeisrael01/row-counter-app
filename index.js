"use strict";
//turn element to variable
let countEl = document.getElementById("count-el");

//access element through function
let count = 0;
function increment() {
  count += 1;
  // countEl.innerText = count;
  countEl.textContent = count;
}

function decrement() {
  if (count === 0) {
    count === 0;
  } else {
    count -= 1;
    // countEl.innerText = count;
    countEl.textContent = count;
  }
}

let myName = "Adediran Israel";
let greeting = "Welcome Back ";
let saveEl = document.getElementById("save-el");

function saveCount() {
  // let countStr = ` ${count} - `;
  // saveEl.innerText += countStr;
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  welcomeEl = document.getElementById("welcome-el");
  // welcomeEl.innerText = greeting + name;
  welcomeEl.textContent = greeting + myName;
  countEl.textContent = 0;
  count = 0;
}
