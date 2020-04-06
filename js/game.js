//scenes used for menu, game, and end screen
let gameScene = new Phaser.Scene('Game');
let endScene = new Phaser.Scene('End')
let menuScene = new Phaser.Scene('Menu')
 

let config = {
  type: Phaser.AUTO,  
  height: 720, 
  width: 1260,
  scene: [menuScene, gameScene, endScene]
};
 

let game = new Phaser.Game(config);
//player speed
const SPEED = 5;


//sets the player speed 
gameScene.init = function() {
this.player1Speed = SPEED;
this.player2Speed = SPEED;
 
}
//loads menu images and sprites
menuScene.preload = function() {
	this.menuLoad()
}
//loads end screen images
endScene.preload = function () { 
	this.load.image('endScreen','images/sky.jpeg')
	this.load.image('p1Win' , 'images/p1Win.png')
	this.load.image('p2Win' , 'images/p2Win.png')
	this.load.image('restartBtn', 'images/restart.png')

}
//loads HP bars, characters, and music
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

 	//loads certain song depending on which characters are chosen by players
 	this.musicPre();
}
//sets global varibles
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
let music;
let p1Block;
let p2Block;
let victor;
let bar1HP;
let bar2HP;

//creates menu images
menuScene.create = function() {
	//sets defaults for player choice and directions
	p1 = 1;
	p2 = 1;
	right = false
	left = false;
	//creates menu background
	let main = this.add.sprite(0,0, 'menuScreen')
	main.setOrigin(0,0)
	//creates menu images and interactives to choose characters and start game
	this.menuCreate();
}

//creates image for winner and restart button
endScene.create = function() {
	let end = this.add.sprite(0,0, 'endScreen')
	end.setOrigin(0,0)

	//asks who winner was, displays appropriate winner image in end
	if (victor == 1) {
		this.winner = this.add.sprite(this.sys.game.config.width / 2,100, 'p1Win')
	} else {
		this.winner = this.add.sprite(this.sys.game.config.width /2 ,100, 'p2Win')
	}

	this.restartBtn = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 1.5, 'restartBtn').setScale(.4);

	this.restartBtn.setInteractive();

	this.restartBtn.on('pointerdown', () => {
		this.scene.start(gameScene);
	})	
}

//sets defaults for start of game varibles
gameScene.create = function() {
	this.HP1 = 20;
	this.HP2 = 20;
	this.bar1HP = 5;
	this.bar2HP = 5;
	this.p1Block = false;
	this.p2Block = false;

	//creates background
	let bg = this.add.sprite(0, -300, 'background');
	bg.setOrigin(0,0);

	//creates character chosen from menu select
	this.charSetCreate();

	//scales both players to correct size
	this.player1.setScale(.7);
	this.player2.setScale(.7);


	//sets HP bars up
	let bar1 = this.add.sprite(950,0, 'HP-Bar2-5').setScale(.5);

	bar1.setOrigin(0,0)	

	let bar2 = this.add.sprite(0,0, 'HP-Bar1-5').setScale(.5);
	
	bar2.setOrigin(0,0)



	//sets all input command keys for game controls
	rightKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

	leftKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

	rightKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

	leftKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

	attackKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

	attackKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

	blockKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

	blockKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

	//plays the chosen battle song.
	this.musicCreate();

 
 
}

//animations for menu sprites
menuScene.update = function() {
	this.menuUpdate()
}

//
gameScene.update = function() {
	//loads standing animations when not doing anything
	this.charSetUpdate();

	
  	//checks if player has won
    this.gameOver();
    //checks for movement inputs, and applies movement and animations when moving
    this.move();
    //checks for collision which other player, and it player hits register
    this.collision();
    //checks if players are in bounds
    this.checkBounds();

    //sets attack animations
    if (Phaser.Input.Keyboard.JustDown(attackKey1)){ 	
	 	this.player1.setTexture('p1-p')
	}
	if (Phaser.Input.Keyboard.JustDown(attackKey2)){
	    this.player2.setTexture('p2-p')  	
	}

	//sets block value and animation
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


//checks if either player has lost, goes to end screen if game is over
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


//checks bounds for players
 gameScene.checkBounds = function() {
 	if (this.player1.x < 0) {
 		this.player1.x = 0
 	}
 	if (this.player2.x > 1260) {
 		this.player2.x = 1260
 	}


 }







