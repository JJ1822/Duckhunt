const Stage = require("./stage");
const Duck = require("./duck");





class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.duck = new Duck({ pos: [600,200], vel: [9,5], dir: "right" });
    this.duck1 = new Duck({ pos: [1,200], vel: [12,7], dir: "right" });
    this.duck2 = new Duck({ pos: [600,1], vel: [-12,3], dir: "right" });
    this.duck3 = new Duck({ pos: [600,100], vel: [0,0], dir: "right" });
    this.stage = new Stage;
    this.gameStart = false;
    this.points = 0;

    this.mainLoop = this.mainLoop.bind(this);
    this.canvas = document.getElementById('canvas');
    this.handleClick = this.handleClick.bind(this);
    this.canvas.addEventListener("click", this.handleClick);
  }

  play() {
    this.mainLoop();

  }


  mainLoop() {


    this.draw();
    window.requestAnimationFrame( () => {
      this.mainLoop();
    });


  }

  draw() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if(this.points === 300) {
      this.resetGame();
      // this.resetGame();
    }

    if (this.gameStart) {
      this.ctx.clearRect(0, 0, width, height);
      this.duck.draw(this.ctx);
      this.duck1.draw(this.ctx);
      this.duck2.draw(this.ctx);
      this.stage.draw(this.ctx);
      this.ctx.font = "40pt Calibri";
      this.ctx.fillStyle = 'white';
      this.ctx.fillText(this.points, width - 200 , height - 50);
      // setTimeout(this.resetGame(), 30000);
    } else {
        this.ctx.clearRect(0, 0, width, height);
        this.stage.draw(this.ctx);
        this.duck3.draw(this.ctx, 300, 300);
        this.ctx.font = "50pt Calibri";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("Click the Duck to Start", width - 1050 , height - 50);
    }
  }


  resetGame() {
    setTimeout(() => {this.duck = new Duck({ pos: [600,200], vel: [9,5], dir: "right" });
    this.duck1 = new Duck({ pos: [1,200], vel: [12,7], dir: "right" });
    this.duck2 = new Duck({ pos: [600,1], vel: [-12,3], dir: "right" });
    // this.duck3 = new Duck({ pos: [600,100], vel: [0,0], dir: "right" });
    // this.stage = new Stage;
    this.gameStart = false;
    this.points = 0;}, 2000);
  }

  handleClick(e) {
    let x = e.clientX;
    let y = e.clientY;
    const imgHeight = 120;
    const imgWidth = 150;
    const width = window.innerWidth;
    const height = window.innerHeight;


		this.ctx.fillStyle = ("white");
    this.ctx.fillRect(0,0,width, height);

    if ( x < this.duck.pos[0] + imgWidth && y < this.duck.pos[1] + imgHeight
         && x  > this.duck.pos[0] && y > this.duck.pos[1] && this.gameStart) {
      this.duck.alive = false;
      this.points += 100;
    }
    if ( x < this.duck1.pos[0] + imgWidth && y < this.duck1.pos[1] + imgHeight
         && x  > this.duck1.pos[0] && y > this.duck1.pos[1] && this.gameStart) {
      this.duck1.alive = false;
      this.points += 100;
    }
    if ( x < this.duck2.pos[0] + imgWidth && y < this.duck2.pos[1] + imgHeight
         && x  > this.duck2.pos[0] && y > this.duck2.pos[1] && this.gameStart) {
      this.duck2.alive = false;
      this.points += 100;
    }
    if ( x < this.duck3.pos[0] + 450 && y < this.duck3.pos[1] + 450
         && x  > this.duck3.pos[0] && y > this.duck3.pos[1]) {
      // this.duck3.alive = true;
      this.gameStart = true;
    }



  }



}

module.exports = Game;
