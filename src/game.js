const Stage = require("./stage");
const Duck = require("./duck");


let fps, fpsInterval, startTime, now, then, elapsed;


class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.duck = new Duck({ pos: [1,1], vel: [4,4], dir: "right" });
    this.duck1 = new Duck({ pos: [1,200], vel: [7,5], dir: "right" });
    this.duck2 = new Duck({ pos: [400,1], vel: [-4,2], dir: "right" });
    this.stage = new Stage;

    // this.mainLoop = this.mainLoop.bind(this);
    this.canvas = document.getElementById('canvas');
    this.handleClick = this.handleClick.bind(this);
    this.canvas.addEventListener("click", this.handleClick);
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
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.duck.draw(this.ctx);
    this.duck1.draw(this.ctx);
    this.duck2.draw(this.ctx);
    this.stage.draw(this.ctx);
  }

  handleClick(e) {
    let x = e.clientX;
    let y = e.clientY;
    const imgHeight = 30;
    const imgWidth = 30;


    if ( x < this.duck.pos[0] + imgWidth && y < this.duck.pos[1] + imgHeight ) {
      this.duck.alive = false;
    }
  }



}

module.exports = Game;
