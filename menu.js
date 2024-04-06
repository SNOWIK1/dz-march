const startBtn = document.getElementById("game-start")

startBtn.addEventListener("click", e => {
    document.location = "/game.html"
})

const helpBtn = document.getElementById("game-help");

helpBtn.addEventListener("click", (e) => {
  document.location = "/help.html";
});

// const optionsBtn = document.getElementById("game-options");

// optionsBtn.addEventListener("click", (e) => {
//   document.location = "/game.html";
// });