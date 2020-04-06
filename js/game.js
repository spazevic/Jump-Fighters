
let gameScene = new Phaser.Scene('Game');
let endScene = new Phaser.Scene('End')
//menu scene, if able to get that far
let menuScene = new Phaser.Scene('Menu')
 

let config = {
  type: Phaser.AUTO,  
  height: 720, 
  width: 1260,
  scene: [menuScene, gameScene, endScene]
};
 

let game = new Phaser.Game(config);

const SPEED = 5;



gameScene.init = function() {
this.player1Speed = SPEED;
this.player2Speed = SPEED;
 
}

menuScene.preload = function() {
	this.menuLoad()
}
endScene.preload = function () { 
	this.load.image('endScreen','images/sky.jpeg')
	this.load.image('p1Win' , 'images/p1Win.png')
	this.load.image('p2Win' , 'images/p2Win.png')
	this.load.image('restartBtn', 'images/restart.png')

}

gameScene.preload = function() {
	this.charSetLoad();
	this.load.image('background', 'images/konoha-stage.jpeg');
	
	//hpbar player 1
 	this.load.image('HP-Bar1-5', 'images/HP1-Full.png')
 	this.load.image('HP-Bar1-4', 'images/HP1-80.png')
 	this.load.image('HP-Bar1-3', 'images/HP1-60.png')
 	this.load.image('HP-Bar1-2', 'images/HP1-40.png')
 	this.load.image('HP-Bar1-1', 'images/HP1-20.png')
 	this.load.image('HP-Bar1-0', 'images/HP1-0.png')
 	
 	//HP bar player 2
 	this.load.image('HP-Bar2-5', 'images/HP2-Full.png')
 	this.load.image('HP-Bar2-4', 'images/HP2-80.png')
 	this.load.image('HP-Bar2-3', 'images/HP2-60.png')
 	this.load.image('HP-Bar2-2', 'images/HP2-40.png')
 	this.load.image('HP-Bar2-1', 'images/HP2-20.png')
 	this.load.image('HP-Bar2-0', 'images/HP2-0.png')

 	this.musicPre();
}

let right1;
let left1;
let right2;
let left2;
let HP1;
let HP2; 
let spacebar; 
let rightKey1;
let leftkey1;
let rightKey2;
let leftKey2;
let attackKey1;
let attackKey2;
let blockKey1;
let blockKey2;
let p1;
let p2;
let p1Block;
let p2Block;
let music;
let victor;
let bar1HP;
let bar2HP;

menuScene.create = function() {
	p1 = 1;
	p2 = 1;
	right = false
	left = false;
	music = 6
	let main = this.add.sprite(0,0, 'menuScreen')
	main.setOrigin(0,0)
	this.menuCreate();


}
endScene.create = function() {
	let end = this.add.sprite(0,0, 'endScreen')
	end.setOrigin(0,0)

	if (victor == 1) {
		this.winner = this.add.sprite(this.sys.game.config.width / 2,100, 'p1Win')
	} else {
		this.winner = this.add.sprite(this.sys.game.config.width /2 ,100, 'p2Win')
	}

	this.restartBtn = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 1.5, 'restartBtn').setScale(.4);

	this.restartBtn.setInteractive();

	this.restartBtn.on('pointerdown', () => {
		this.scene.start(gameScene)
	    console.log('work?')})

}

gameScene.create = function() {
	this.HP1 = 20;
	this.HP2 = 20;
	this.bar1HP = 5;
	this.bar2HP = 5;
	this.hit1 = 0;
	this.hit2 = 0;
	this. p1Block = false;
	this.p2Block = false;
	let bg = this.add.sprite(0, -300, 'background');

	bg.setOrigin(0,0);

	
	this.charSetCreate();


	this.player1.setScale(.7);
	this.player2.setScale(.7);



	let bar1 = this.add.sprite(950,0, 'HP-Bar2-5').setScale(.5);
	


	bar1.setOrigin(0,0)

	

	let bar2 = this.add.sprite(0,0, 'HP-Bar1-5').setScale(.5);
	


	bar2.setOrigin(0,0)




	rightKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

	leftKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

	rightKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

	leftKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

	attackKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

	attackKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

	blockKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

	blockKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

	this.musicCreate();

 
 
}

menuScene.update = function() {
	this.menuUpdate()

}

gameScene.update = function() {

	this.charSetUpdate();

	
  	
    this.gameOver();
    this.move();
    this.collision();
    this.checkBounds();

    if (Phaser.Input.Keyboard.JustDown(attackKey1)){
	     	
	 	this.player1.setTexture('p1-p')


	}

	if (Phaser.Input.Keyboard.JustDown(attackKey2)){
	    this.player2.setTexture('p2-p')
	     	
	}
	if (blockKey1.isDown){
	    this.player1.setTexture('p1-b')
	    this.p1Block = true
	     	
	} else {
		this.p1Block = false;
	}
	if (blockKey2.isDown){
	    this.player2.setTexture('p2-b')
	    this.p2Block = true
	     	
	} else {
		this.p2Block = false
	}
 }   


 gameScene.gameOver = function() {
 	    if (this.HP1 == 0) {
 	    right1 = false
 	    left1 = false
 	    right2 = false
 	    left2 = false
 	    victor = 2;
    	this.musicStop();
    	this.scene.start(endScene)
    } else if (this.HP2 == 0) {
    	right1 = false
    	left1 = false
    	right2 = false
 	    left2 = false
 	    victor = 1;
    	this.musicStop();
    	this.scene.start(endScene)
    }
 } 


 gameScene.checkBounds = function() {
 	if (this.player1.x < 0) {
 		this.player1.x = 0
 	}
 	if (this.player2.x > 1260) {
 		this.player2.x = 1260
 	}


 }







