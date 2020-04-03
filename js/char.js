gameScene.charSetLoad = function () {

	if (p1 == 1 || p2 == 1) {
		this.load.spritesheet('Nar-Stand', 'images/Nar-Stand-Sheet.png', {frameWidth: 152.5, frameHeight: 220})
	 	this.load.spritesheet('Nar-Run-R', 'images/Nar-Run-R.png', {frameWidth: 184.5, frameHeight: 220})
	 	this.load.spritesheet('Nar-Run-L', 'images/Nar-Run-L.png', {frameWidth: 176, frameHeight: 220})
	 	if (p1 == 1) {
	 		this.load.image('p1-p', 'images/Nar-Punch-R.png')
	 		this.load.image('p1-b', 'images/Nar-Block-R.png')
	 	}
	 	if (p2 == 1) {
	 		this.load.image('p2-p', 'images/Nar-Punch-L.png')
	 		this.load.image('p2-b', 'images/Nar-Block-L.png')

	 	}

	}

	if (p1 == 2 || p2 == 2) {
		this.load.image('Ichi-R', 'images/Ichi-Stand-0.png',)
		this.load.spritesheet('Ichi-Stand-R', 'images/Ichi-Stand-R.png',{frameWidth: 320.5, frameHeight: 220})
		this.load.spritesheet('Ichi-Stand-L', 'images/Ichi-Stand-L.png',{frameWidth: 320.5, frameHeight: 220})
		if (p1 == 2) {
	 		this.load.image('p1-p', 'images/Ichi-Hit-R.png')
	 		this.load.image('p1-b', 'images/Ichi-Block-R.png')
	 	}
	 	if (p2 ==2) {
	 		this.load.image('p2-p', 'images/Ichi-Hit-L.png')
	 		this.load.image('p2-b', 'images/Ichi-Block-L.png')
	 	}
	}
}

gameScene.charSetCreate = function () {

	this.anims.create({
	    key: 'I-left',
	    frames: this.anims.generateFrameNumbers('Ichi-Stand-L', { start: 0, end: 3 }),
	    frameRate: 4,
	    repeat: -1
	});
	this.anims.create({
	    key: 'I-right',
	    frames: this.anims.generateFrameNumbers('Ichi-Stand-R', { start: 0, end: 3}),
	    frameRate: 4,
	    repeat: -1
	});	
	if (p1 ==1 || p2 ==1) {

		//Naruto Stangding Animations
		this.anims.create({
		    key: 'left',
		    frames: this.anims.generateFrameNumbers('Nar-Stand', { start: 0, end: 3 }),
		    frameRate: 4,
		    repeat: -1
		});
		this.anims.create({
		    key: 'right',
		    frames: this.anims.generateFrameNumbers('Nar-Stand', { start: 4, end: 7}),
		    frameRate: 4,
		    repeat: -1
		});

		//Naruto Running Animations
		this.anims.create({
		    key: 'left-r',
		    frames: this.anims.generateFrameNumbers('Nar-Run-L', { start: 0, end: 7 }),
		    frameRate: 4,
		    repeat: -1
		});
		this.anims.create({
		    key: 'right-r',
		    frames: this.anims.generateFrameNumbers('Nar-Run-R', { start: 0, end: 7}),
		    frameRate: 4,
		    repeat: -1
		});
		//Creates sprite for player 1 as Naruto
		if (p1 == 1) {
			this.player1 = this.add.sprite(50, this.sys.game.config.height / 2, 'Nar-Stand');
		}
		//Creates sprite for player 2 as Naruto
		if (p2 == 1) {
			this.player2 = this.add.sprite(550, this.sys.game.config.height / 2, 'Nar-Stand');
		}
	}
	

	if (p1 == 2) {
		this.player1 = this.add.sprite(50, this.sys.game.config.height / 2, 'Ichi-R');
	}

	

	if (p2 == 2) {
		this.player2 = this.add.sprite(550, this.sys.game.config.height / 2, 'Ichi-R');
	}
}

gameScene.charSetUpdate = function() {
	if (right1 == false &&  left1 == false && p1 == 1) {
		this.player1.anims.play('right', true)
	}
	if (right2 == false &&  left2 == false && p2 == 1) {
		this.player2.anims.play('left', true)
	}
	if (right1 == false &&  left1 == false && p1 == 2) {
		this.player1.anims.play('I-right', true)
	}
	if (right2 == false &&  left2 == false && p2 == 2) {
		this.player2.anims.play('I-left', true)
	}	
}