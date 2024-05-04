/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#randomCard").innerHTML = generateRandomCard();
  });

  const suits = ["spades", "hearts", "diamonds", "clubs"];
  const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king"
  ];

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);

  const randomSuit = suits[randomSuitIndex];
  const randomValue = values[randomValueIndex];

  console.log(`Random Card: ${randomValue} of ${randomSuit}`);
  return `${randomValue} of ${randomSuit}`;
};
