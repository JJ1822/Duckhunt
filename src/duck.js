
class Duck {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.dir = options.dir;
    this.alive = true;
    this.deathCounter = 0;
    this.counter = 0;
    this.img1 = new Image();
    this.img1.src = '../app/assets/images/ducks/right0.png';
    this.img2 = new Image();
    this.img2.src = '../app/assets/images/ducks/right1.png';
    this.img3 = new Image();
    this.img3.src = '../app/assets/images/ducks/right2.png';
    this.leftImg1 = new Image();
    this.leftImg1.src = '../app/assets/images/ducks/left0.png';
    this.leftImg2 = new Image();
    this.leftImg2.src = '../app/assets/images/ducks/left1.png';
    this.leftImg3 = new Image();
    this.leftImg3.src = '../app/assets/images/ducks/left2.png';
    this.shotImg = new Image();
    this.shotImg.src = '../app/assets/images/ducks/shot0.png';
    this.deadImg1 = new Image();
    this.deadImg1.src = '../app/assets/images/ducks/dead0.png';
    this.deadImg2 = new Image();
    this.deadImg2.src = '../app/assets/images/ducks/dead1.png';
    this.deadImg3 = new Image();
    this.deadImg3.src = '../app/assets/images/ducks/dead2.png';


  }



  draw(ctx, sizeX = 90, sizeY = 90) {

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

    const leftimg = {
      0: this.leftImg1,
      1: this.leftImg1,
      2: this.leftImg1,
      3: this.leftImg1,
      4: this.leftImg1,
      5: this.leftImg1,
      6: this.leftImg1,
      7: this.leftImg1,
      8: this.leftImg2,
      9: this.leftImg2,
      10: this.leftImg2,
      11: this.leftImg2,
      12: this.leftImg2,
      13: this.leftImg2,
      14: this.leftImg2,
      15: this.leftImg2,
      16: this.leftImg3,
      17: this.leftImg3,
      18: this.leftImg3,
      19: this.leftImg3,
      20: this.leftImg3,
      21: this.leftImg3,
      22: this.leftImg3,
      23: this.leftImg3
    };

    const deadimg = {
      0: this.deadImg1,
      1: this.deadImg1,
      2: this.deadImg1,
      3: this.deadImg1,
      4: this.deadImg2,
      5: this.deadImg2,
      6: this.deadImg2,
      7: this.deadImg2,
      8: this.deadImg3,
      9: this.deadImg3,
      10: this.deadImg3,
      11: this.deadImg3
    };

    let posx = this.pos[0];
    let posy = this.pos[1];
    // this.img.src = rightimg[this.counter];
    if(!this.alive && this.deathCounter > 10) {
      this.deathCounter += 1;
      ctx.drawImage(deadimg[this.deathCounter % 10], posx, posy, sizeX, sizeY);
    } else if (!this.alive && this.deathCounter < 11) {
      this.deathCounter += 1;
      ctx.drawImage(this.shotImg, posx, posy, sizeX, sizeY);
    }
     if (this.alive && this.vel[0] < 0) {
      ctx.drawImage(leftimg[this.counter], posx, posy, sizeX, sizeY);
    } else if (this.alive) (
      ctx.drawImage(rightimg[this.counter], posx, posy, sizeX, sizeY)
    );
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
    let dx = this.pos[0] + this.vel[0];
    let dy = this.pos[1] + this.vel[1];

    if (!this.alive && this.deathCounter < 11) {
      this.vel = [0,0];
    } else if (!this.alive && this.deathCounter > 10) {
      this.vel = [0,5];
    } else if ( dx > window.innerWidth - 100 || dx < 0 ) {
      this.vel[0] = -this.vel[0];
    } else if ( dy > (window.innerHeight - 150) || dy < 0 ) {
      this.vel[1] = -this.vel[1];
    }
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}

module.exports = Duck;
