import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();
  document.querySelector("#btn").addEventListener("click", generateRandomCard);
};

function generateRandomCard() {
  const suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);

  const randomSuit = suits[randomSuitIndex];
  const randomValue = values[randomValueIndex];

  document.querySelector(".value").innerHTML = randomValue;
 
  for (let suit of document.querySelectorAll(".suit")){
    suit.innerHTML = randomSuit;
    if (randomSuit === "\u2665" || randomSuit === "\u2666") {
      suit.style.color = "red"; 
    } else {
      suit.style.color = ""; 
    }
  }
}
