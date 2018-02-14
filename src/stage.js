
class Stage {
  constructor() {
  }

  draw(ctx) {
    // ctx.clearRect(0, 0, Stage.DIM_X, Stage.DIM_Y);
    // ctx.fillStyle = "0xFFFFFF";
    // ctx.fillRect(0, 0, Stage.DIM_X, Stage.DIM_Y);
    const width = 900;
    const height = 500;
    let img2 = new Image();
    img2.src = '/Users/jayjohnson/Desktop/duck_hunt/app/assets/images/stage/tree.png';
    let img = new Image();
    img.src = '/Users/jayjohnson/Desktop/duck_hunt/app/assets/images/stage/background.png';
    img.onload = function() {
      ctx.drawImage(img, 0, 0, width, height);
    };
  }

}

Stage.BG_COLOR = "0xFFFFFF";
Stage.DIM_X = 1440;
Stage.DIM_Y = 800;
Stage.FPS = 32;

module.exports = Stage;
