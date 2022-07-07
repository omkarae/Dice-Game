function refresh() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randAdd1 = "images/dice" + randomNumber1 + ".png";
  var randAdd2 = "images/dice" + randomNumber2 + ".png";
  var img1 = document.querySelectorAll("img")[0];
  var img2 = document.querySelectorAll("img")[1];
  img1.setAttribute("src", randAdd1);
  img2.setAttribute("src", randAdd2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "It's a draw";
  }
}
