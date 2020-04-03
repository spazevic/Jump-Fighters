gameScene.move = function () {

	if (rightKey1.isDown && this.p1Block == false) {
		if (p1 == 1) {
 		this.player1.anims.play('right-r', true)
 		}
    	this.player1.x += this.player1Speed;
    	right1 = true;
    	left1= false;
  	}
    if (leftKey1.isDown && this.p1Block == false) {
    	if (p1 == 1){
 		this.player1.anims.play('left-r', true)
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
		this.player2.anims.play('right-r', true)
		}
    	this.player2.x += this.player2Speed;
    	right2 = true;
    	left2= false;
  	}
    if (leftKey2.isDown && this.p2Block == false) {
    	if (p2 == 1) {
		this.player2.anims.play('left-r', true)
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
    		this.player1Speed = 4;
    	}
    	if (!left2) {
    		this.player2Speed = 4;
    	}


	    
    } 
    if (!Phaser.Geom.Intersects.RectangleToRectangle(this.player1.getBounds(), this.player2.getBounds())) {
    	this.player2Speed = 4
    	this.player1Speed = 4
    }


    if (this.player1.x + 70>= this.player2.x) {

     if (Phaser.Input.Keyboard.JustDown(attackKey1)){
	     	console.log('work plz');
	   		console.log(this.HP2);
	   		this.hit1 = 0;
	   		this.hit2++;
	     	this.player2.x += 50
	    	this.player1Speed = 4;
	    	this.player2Speed = 4;
	    	this.player1.setTexture('p1-p')
	    	if (this.hit2 == 2) {
	    		this.HP2--;
	    		bar1 = this.add.sprite(600,0, `HP-Bar2-${this.HP2}`);
	    		bar1.setOrigin(0,0)
	    		bar1.setScale(.5)
	    		this.hit2 = 0;

	    	}
	     }

	     if (Phaser.Input.Keyboard.JustDown(attackKey2)){
	     	console.log('work plz lvl2')
	     	console.log(this.HP1);
	     	this.hit2 = 0;
	     	this.hit1++;
	     	this.player1.x -= 50
		   	this.player1Speed = 4;
	    	this.player2Speed = 4;
	    	this.player2.setTexture('p2-p')
	    	if (this.hit1 == 2 ) {
	   	    	this.HP1--;
	    		bar2 = this.add.sprite(0,0, `HP-Bar1-${this.HP1}`);
	    		bar2.setOrigin(0,0)
	    		bar2.setScale(.5)
	    		this.hit1 = 0;
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