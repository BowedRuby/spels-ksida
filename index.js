fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2727ad42ddmsh22ee1aae8418d8bp13d995jsn91fac80ca3a4",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
