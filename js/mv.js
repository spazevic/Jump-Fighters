//tests for movement key input, plays movement animations and moves players
gameScene.move = function () {
	if (rightKey1.isDown && this.p1Block == false) {
		if (p1 == 1) {
 		this.player1.anims.play('N-Run-R', true)
 		} else if (p1 == 2) {
      this.player1.anims.play('I-Run-R', true)
    } else if ( p1 == 3) {
      this.player1.anims.play('L-Run-R', true)
    } else if (p1 == 4) {
      this.player1.anims.play('G-Run-R', true)
    }

    	this.player1.x += this.player1Speed;
    	right1 = true;
    	left1= false;
  	}
    if (leftKey1.isDown && this.p1Block == false) {
    	if (p1 == 1){
 		   this.player1.anims.play('N-Run-L', true)
 		} else if (p1 == 2) {
       this.player1.anims.play('I-Run-L', true)
    } else if ( p1 == 3) {
      this.player1.anims.play('L-Run-L', true)
    } else if (p1 == 4) {
      this.player1.anims.play('G-Run-L', true)
    }

    	this.player1.x -= this.player1Speed;
    	right1 = false;
    	left1 = true;
    }

    if(leftKey1.isUp && rightKey1.isUp) {
    	right1 = false
    	left1 = false
    }

    if (rightKey2.isDown && this.p2Block == false) {
    	if (p2 == 1) {
  		this.player2.anims.play('N-Run-R', true)
  		} else if (p2 == 2) {
        this.player2.anims.play('I-Run-R', true)
      } else if ( p2 == 3) {
        this.player2.anims.play('L-Run-R', true)
      } else if (p2 == 4) {
        this.player2.anims.play('G-Run-R', true)
      } 


    	this.player2.x += this.player2Speed;
    	right2 = true;
    	left2= false;
  	}
    if (leftKey2.isDown && this.p2Block == false) {
    	if (p2 == 1) {
  		  this.player2.anims.play('N-Run-L', true)
  		} else if (p2 == 2) {
        this.player2.anims.play('I-Run-L', true)
      } else if ( p2 == 3) {
        this.player2.anims.play('L-Run-L', true)
      } else if (p2 == 4) {
        this.player2.anims.play('G-Run-L', true)
      } 


    	this.player2.x -= this.player2Speed;
    	right2 = false;
    	left2= true;
    }
    if(leftKey2.isUp && rightKey2.isUp) {
    	right2 = false
    	left2 = false
    }
}

//tests for collision and stops players if colliding, also checks if attacks land
gameScene.collision = function () {
		if (this.player1.x + 20 >= this.player2.x) {
    	if (right1) {
    		this.player1Speed = 0;
    	}
    	if (left2) {
    		this.player2Speed = 0;
    	}
    	if (!right1) {
    		this.player1Speed = SPEED;
    	}
    	if (!left2) {
    		this.player2Speed = SPEED;
    	}


	    //allows players to move both directions when not colliding
    } 
    if (!Phaser.Geom.Intersects.RectangleToRectangle(this.player1.getBounds(), this.player2.getBounds())) {
    	this.player2Speed = SPEED
    	this.player1Speed = SPEED
    }

    //if within range checks for attacks
    if (this.player1.x + 100>= this.player2.x) {

     if (Phaser.Input.Keyboard.JustDown(attackKey1)){
	     	console.log('work plz');
	   		console.log(this.HP2);
        this.player1.setTexture('p1-p')
	     	this.player2.x += 50
	    	this.player1Speed = 4;
	    	this.player2Speed = 4;
        //checks for blocking
	    	if (!this.p2Block) {
	    		this.HP2--;
          if (this.HP2 % 4 == 0) {
            this.bar2HP--;
          }
	    		 bar1 = this.add.sprite(950,0, `HP-Bar2-${this.bar2HP}`);
	    		bar1.setOrigin(0,0)
	    		bar1.setScale(.5)

	    	}
	     }

	     if (Phaser.Input.Keyboard.JustDown(attackKey2)){
	     	console.log('work plz lvl2')
	     	console.log(this.HP1);
        this.player2.setTexture('p2-p')
	     	this.player1.x -= 50
		   	this.player1Speed = 4;
	    	this.player2Speed = 4;
        //checks for blocking
	    	if (!this.p1Block) {
	   	    	this.HP1--;
            if (this.HP1 % 4 == 0) {
              this.bar1HP--;
            }
	    		bar2 = this.add.sprite(0,0, `HP-Bar1-${this.bar1HP}`);
	    		bar2.setOrigin(0,0)
	    		bar2.setScale(.5)
	    	}
	     }
	 }
}