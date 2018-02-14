
class Duck {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.dir = options.dir;
    this.alive = true;
    this.counter = 0;
    this.img1 = new Image();
    this.img1.src = '../app/assets/images/ducks/right0.png';
    this.img2 = new Image();
    this.img2.src = '../app/assets/images/ducks/right1.png';
    this.img3 = new Image();
    this.img3.src = '../app/assets/images/ducks/right2.png';
    this.img4 = new Image();
    this.img4.src = '../app/assets/images/ducks/right0.png';
    this.img5 = new Image();
    this.img5.src = '../app/assets/images/ducks/right0.png';
    this.img6 = new Image();
    this.img6.src = '../app/assets/images/ducks/right0.png';

  }



  draw(ctx) {
    this.counter = (this.counter + 1) % 24;
    const rightimg = {
      0: this.img1,
      1: this.img1,
      2: this.img1,
      3: this.img1,
      4: this.img1,
      5: this.img1,
      6: this.img1,
      7: this.img1,
      8: this.img2,
      9: this.img2,
      10: this.img2,
      11: this.img2,
      12: this.img2,
      13: this.img2,
      14: this.img2,
      15: this.img2,
      16: this.img3,
      17: this.img3,
      18: this.img3,
      19: this.img3,
      20: this.img3,
      21: this.img3,
      22: this.img3,
      23: this.img3
    };
    // const leftimg = {
    //   0: '../app/assets/images/ducks/left0.png',
    //   1: '../app/assets/images/ducks/left1.png',
    //   2: '../app/assets/images/ducks/left2.png'
    // };

    let posx = this.pos[0];
    let posy = this.pos[1];
    // this.img.src = rightimg[this.counter];

    ctx.drawImage(rightimg[this.counter], posx, posy);
    // let img = new Image();
    // if( this.dir === 'right' ) {
    //   img.src = rightimg[this.counter];
    // } else {
    //   img.src = leftimg[this.counter];
    // }
    //
    // img.onload = function() {
    //   ctx.drawImage(img, posx, posy);
    // };
    this.move();
  }

  move() {
    
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}

module.exports = Duck;
