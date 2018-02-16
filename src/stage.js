
class Stage {
  constructor() {
  this.img = new Image();
  this.img.src = './app/assets/images/stage/background1.png';
  }

  draw(ctx) {
    // ctx.clearRect(0, 0, Stage.DIM_X, Stage.DIM_Y);
    // ctx.fillStyle = "0xFFFFFF";
    // ctx.fillRect(0, 0, Stage.DIM_X, Stage.DIM_Y);

    const width = window.innerWidth;
    const height = window.innerHeight;

      ctx.drawImage(this.img, 0, 0, width, height);

      // ctx.drawImage(this.imgTree, width * .3, height * .3);

  }

}

Stage.BG_COLOR = "0xFFFFFF";
Stage.DIM_X = 1440;
Stage.DIM_Y = 800;
Stage.FPS = 32;

module.exports = Stage;
