const Stage = require("./stage");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('canvas');

  document.documentElement.style.cursor = 'crosshair';
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;
  const ctx = canvasEl.getContext("2d");
  // const stage = new Stage;
  // stage.draw(ctx);
  const game = new Game(ctx);
  game.play();

});
