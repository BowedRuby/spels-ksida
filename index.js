const API_KEY = "a02f8b1f44f840449ad67c894e14d11c";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let searchString = document.querySelector("[data-input-search]").value;
  searchString = searchString.trim().toLowerCase().split(" ").join("-");
  fetch("https://api.rawg.io/api/games/" + searchString + "?key=" + API_KEY)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("#game").innerHTML = "";

      let gameDisplay = document.createElement("div");
      gameDisplay.classList.add("game-display");

            let gameName = document.createElement("h2");
            gameName.innerHTML = data.name;
            gameDisplay.append(gameName);

      let gameFact = document.createElement("p");
      gameFact.innerHTML = data.description;
      gameDisplay.append(gameFact);
      
      document.querySelector("#game").append(gameDisplay);
      let gameImg = document.createElement("img");
      gameImg.setAttribute("src", data.background_image);
      gameImg.classList.add("game-image");
      gameDisplay.append(gameImg);

      document.querySelector("#game").append(gameDisplay);
    })
    .catch((err) => {
      console.error(err);
    });
});
