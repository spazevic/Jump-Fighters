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
		this.load.spritesheet('Ichi-Run-R', 'images/Ichi-Run-R.png', {frameWidth: 345.5, frameHeight: 200})
		this.load.spritesheet('Ichi-Run-L', 'images/Ichi-Run-L.png', {frameWidth: 345.5, frameHeight: 200})
		if (p1 == 2) {
			this.load.spritesheet('Ichi-Stand-R', 'images/Ichi-Stand-R.png',{frameWidth: 320.5, frameHeight: 220})
	 		this.load.image('p1-p', 'images/Ichi-Hit-R.png')
	 		this.load.image('p1-b', 'images/Ichi-Block-R.png')
	 	}
	 	if (p2 ==2) {
	 		this.load.spritesheet('Ichi-Stand-L', 'images/Ichi-Stand-L.png',{frameWidth: 320.5, frameHeight: 220})
	 		this.load.image('p2-p', 'images/Ichi-Hit-L.png')
	 		this.load.image('p2-b', 'images/Ichi-Block-L.png')
	 	}
	}

	if (p1 == 3 || p2 == 3) {
		this.load.spritesheet('Luffy-Run-R', 'images/Luffy-Run-R.png', {frameWidth: 226, frameHeight: 220})
		this.load.spritesheet('Luffy-Run-L', 'images/Luffy-Run-L.png', {frameWidth: 226, frameHeight: 220})
		if (p1 == 3) {
			this.load.spritesheet('Luffy-Stand-R', 'images/Luffy-Stand-R.png', {frameWidth: 145.5, frameHeight: 220})
			this.load.image('p1-p', 'images/Luffy-Hit-R.png')
	 		this.load.image('p1-b', 'images/Luffy-Block-R.png')

		}
		if (p2 == 3) {
			this.load.spritesheet('Luffy-Stand-L', 'images/Luffy-Stand-L.png', {frameWidth: 145.5, frameHeight: 220})
			this.load.image('p2-p', 'images/Luffy-Hit-L.png')
	 		this.load.image('p2-b', 'images/Luffy-Block-L.png')
		}
	}

	if (p1 == 4 || p2 == 4) {
		this.load.spritesheet('Goku-Run-R', 'images/Goku-Run-R.png', {frameWidth: 290, frameHeight: 220})
		this.load.spritesheet('Goku-Run-L', 'images/Goku-Run-L.png', {frameWidth: 290, frameHeight: 220})
		if (p1 == 4) {
			this.load.spritesheet('Goku-Stand-R', 'images/Goku-Stand-R.png', {frameWidth: 210.5, frameHeight: 220})
			this.load.image('p1-p', 'images/Goku-Hit-R.png')
	 		this.load.image('p1-b', 'images/Goku-Block-R.png')

		} 
		if (p2 == 4) {
			this.load.spritesheet('Goku-Stand-L', 'images/Goku-Stand-L.png', {frameWidth: 210.5, frameHeight: 220})
			this.load.image('p2-p', 'images/Goku-Hit-L.png')
	 		this.load.image('p2-b', 'images/Goku-Block-L.png')
		}
	}


}

gameScene.charSetCreate = function () {

	
	if (p1 ==1 || p2 ==1) {
		//Naruto Running Animations
		this.anims.create({
		    key: 'N-Run-L',
		    frames: this.anims.generateFrameNumbers('Nar-Run-L', { start: 0, end: 7 }),
		    frameRate: 4,
		    repeat: -1
		});
		this.anims.create({
		    key: 'N-Run-R',
		    frames: this.anims.generateFrameNumbers('Nar-Run-R', { start: 0, end: 7}),
		    frameRate: 4,
		    repeat: -1
		});
		//Creates sprite for player 1 as Naruto
		if (p1 == 1) {
			this.player1 = this.add.sprite(100, this.sys.game.config.height / 1.5, 'Nar-Stand');
			this.anims.create({
		    key: 'N-left',
		    frames: this.anims.generateFrameNumbers('Nar-Stand', { start: 0, end: 3 }),
		    frameRate: 4,
		    repeat: -1
		});
		}
		//Creates sprite for player 2 as Naruto
		if (p2 == 1) {
			this.player2 = this.add.sprite(1160, this.sys.game.config.height / 1.5, 'Nar-Stand');
			this.anims.create({
		    key: 'N-right',
		    frames: this.anims.generateFrameNumbers('Nar-Stand', { start: 4, end: 7}),
		    frameRate: 4,
		    repeat: -1
		});
		}
	}

	if (p1 == 2 || p2 == 2) {

		this.anims.create({
	    key: 'I-Run-R',
	    frames: this.anims.generateFrameNumbers('Ichi-Run-R', { start: 0, end: 7}),
	    frameRate: 4,
	    repeat: -1
		});	

		this.anims.create({
	    key: 'I-Run-L',
	    frames: this.anims.generateFrameNumbers('Ichi-Run-L', { start: 0, end: 7}),
	    frameRate: 4,
	    repeat: -1
		});	

		if (p1 == 2) {
			this.player1 = this.add.sprite(100, this.sys.game.config.height / 1.5, 'Ichi-R');
			this.anims.create({
		    key: 'I-right',
		    frames: this.anims.generateFrameNumbers('Ichi-Stand-R', { start: 0, end: 3}),
		    frameRate: 4,
		    repeat: -1
			});	
		}
		if (p2 == 2) {
			this.player2 = this.add.sprite(1160, this.sys.game.config.height / 1.5, 'Ichi-L');
			this.anims.create({
		    key: 'I-left',
		    frames: this.anims.generateFrameNumbers('Ichi-Stand-L', { start: 0, end: 3 }),
		    frameRate: 4,
		    repeat: -1
			});
		}
	}

	if (p1 == 3 || p2 || 3) {


			this.anims.create({
		    key: 'L-Run-R',
		    frames: this.anims.generateFrameNumbers('Luffy-Run-R', { start: 0, end: 7}),
		    frameRate: 4,
		    repeat: -1
			});	

			this.anims.create({
		    key: 'L-Run-L',
		    frames: this.anims.generateFrameNumbers('Luffy-Run-L', { start: 0, end: 7}),
		    frameRate: 4,
		    repeat: -1
			});


		

		if (p1 == 3) {
			this.player1 = this.add.sprite(100, this.sys.game.config.height / 1.5, 'Luffy-Stand-R');
			this.anims.create({
		    key: 'L-right',
		    frames: this.anims.generateFrameNumbers('Luffy-Stand-R', { start: 0, end: 5}),
		    frameRate: 4,
		    repeat: -1
			});	

		}

		if (p2 == 3) {
			this.player2 = this.add.sprite(1160, this.sys.game.config.height / 1.5, 'Luffy-Stand-L');
			this.anims.create({
		    key: 'L-left',
		    frames: this.anims.generateFrameNumbers('Luffy-Stand-L', { start: 0, end: 5}),
		    frameRate: 4,
		    repeat: -1
			});	

		}
	}

	if (p1 == 4 || p2 || 4) {


			this.anims.create({
		    key: 'G-Run-R',
		    frames: this.anims.generateFrameNumbers('Goku-Run-R', { start: 0, end: 7}),
		    frameRate: 4,
		    repeat: -1
			});	

			this.anims.create({
		    key: 'G-Run-L',
		    frames: this.anims.generateFrameNumbers('Goku-Run-L', { start: 0, end: 7}),
		    frameRate: 4,
		    repeat: -1
			});


		

		if (p1 == 4) {
			this.player1 = this.add.sprite(100, this.sys.game.config.height / 1.5, 'Goku-Stand-R');
			this.anims.create({
		    key: 'G-right',
		    frames: this.anims.generateFrameNumbers('Goku-Stand-R', { start: 0, end: 5}),
		    frameRate: 4,
		    repeat: -1
			});	

		}

		if (p2 == 4) {
			this.player2 = this.add.sprite(1160, this.sys.game.config.height / 1.5, 'Goku-Stand-L');
			this.anims.create({
		    key: 'G-left',
		    frames: this.anims.generateFrameNumbers('Goku-Stand-L', { start: 0, end: 5}),
		    frameRate: 4,
		    repeat: -1
			});	

		}
	}

	
}

gameScene.charSetUpdate = function() {
	if (right1 == false &&  left1 == false && p1 == 1) {
		this.player1.anims.play('N-right', true)
	}
	if (right2 == false &&  left2 == false && p2 == 1) {
		this.player2.anims.play('N-left', true)
	}
	if (right1 == false &&  left1 == false && p1 == 2) {
		this.player1.anims.play('I-right', true)
	}
	if (right2 == false &&  left2 == false && p2 == 2) {
		this.player2.anims.play('I-left', true)
	}
	if (right1 == false &&  left1 == false && p1 == 3) {
		this.player1.anims.play('L-right', true)
	}
	if (right2 == false &&  left2 == false && p2 == 3) {
		this.player2.anims.play('L-left', true)
	}
	if (right1 == false &&  left1 == false && p1 == 4) {
		this.player1.anims.play('G-right', true)
	}
	if (right2 == false &&  left2 == false && p2 == 4) {
		this.player2.anims.play('G-left', true)
	}	
}