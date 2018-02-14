const Stage = require("./stage");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('canvas');

  canvasEl.width = 900;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  const stage = new Stage;
  stage.draw(ctx);
  const game = new Game(ctx);
  game.play();

});
