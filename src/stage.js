
class Stage {
  constructor() {
  this.img = new Image();
  this.img.src = '/Users/jayjohnson/Desktop/duck_hunt/app/assets/images/stage/background.png';
  }

  draw(ctx) {
    // ctx.clearRect(0, 0, Stage.DIM_X, Stage.DIM_Y);
    // ctx.fillStyle = "0xFFFFFF";
    // ctx.fillRect(0, 0, Stage.DIM_X, Stage.DIM_Y);
    const width = window.innerWidth;
    const height = window.innerHeight;

      ctx.drawImage(this.img, 0, 0, width, height);

  }

}

Stage.BG_COLOR = "0xFFFFFF";
Stage.DIM_X = 1440;
Stage.DIM_Y = 800;
Stage.FPS = 32;

module.exports = Stage;
