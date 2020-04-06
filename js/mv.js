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

gameScene.collision = function () {
	//if (Phaser.Geom.Intersects.RectangleToRectangle(this.player1.getBounds(), this.player2.getBounds())) {
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


	    
    } 
    if (!Phaser.Geom.Intersects.RectangleToRectangle(this.player1.getBounds(), this.player2.getBounds())) {
    	this.player2Speed = SPEED
    	this.player1Speed = SPEED
    }


    if (this.player1.x + 100>= this.player2.x) {

     if (Phaser.Input.Keyboard.JustDown(attackKey1)){
	     	console.log('work plz');
	   		console.log(this.HP2);
        this.player1.setTexture('p1-p')
	     	this.player2.x += 50
	    	this.player1Speed = 4;
	    	this.player2Speed = 4;
	    	if (!this.p2Block) {
	    		this.HP2--;
          if (this.HP2 % 4 == 0) {
            this.bar2HP--;
           // bar1 = this.add.sprite(950,0, `HP-Bar2-${this.bar2HP}`);
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




	     // this.attackKey1.on('KeyDown', function(event) {
	     // 	console.log('bam')
	     // })
 //move(player1)

	// if (this.rightKey1.isDown) {
 
 //    	this.player1.x += this.player1Speed;
 //  	}
 //    if (this.leftKey1.isDown) {
 
 //    	this.player1.x -= this.player1Speed;
 //    }

 //    if (this.rightKey2.isDown) {
 
 //    	this.player2.x += this.player2Speed;
 //  	}
 //    if (this.leftKey2.isDown) {
 
 //    	this.player2.x -= this.player2Speed;
 //    }


 	// if (rightKey1.isDown) {
 
  //   	this.player1.x += this.player1Speed;
  // 	}
  //   if (leftKey1.isDown) {
 
  //   	this.player1.x -= this.player1Speed;
  //   }

  //   if (rightKey2.isDown) {
 
  //   	this.player2.x += this.player2Speed;
  // 	}
  //   if (leftKey2.isDown) {
 
  //   	this.player2.x -= this.player2Speed;
  //   }