/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const getRandom = array_y => Math.floor(Math.random() * array_y.length);
  const getValor = array_y => array_y[getRandom(array_y)];

  let questions = {
    who: document.getElementById("who"),
    action: document.getElementById("action"),
    what: document.getElementById("what"),
    when: document.getElementById("when")
  };

  questions.who.innerHTML = "<span>" + getValor(who) + " </span>";
  questions.action.innerHTML = "<span>" + getValor(action) + " </span>";
  questions.what.innerHTML = "<span>" + getValor(what) + " </span>";
  questions.when.innerHTML = "<span>" + getValor(when) + " </span>";
};
