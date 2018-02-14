const Stage = require("./stage");
const Duck = require("./duck");


let fps, fpsInterval, startTime, now, then, elapsed;


class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.duck = new Duck({ pos: [1,1], vel: [1,1], dir: "right" });
    this.stage = new Stage;

    // this.mainLoop = this.mainLoop.bind(this);
  }

  play() {
    this.mainLoop();
  }



  mainLoop() {
    // console.log("frame");
    this.draw();
    window.requestAnimationFrame( () => {
      this.mainLoop();
    });


  }

  draw() {
    this.ctx.clearRect(0, 0, 900, 500);
    this.duck.draw(this.ctx);
    this.stage.draw(this.ctx);
  }



}

module.exports = Game;
