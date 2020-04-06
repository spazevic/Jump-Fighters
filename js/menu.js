menuScene.menuLoad = function() {
	this.load.image('menuScreen', 'images/sky.jpeg')
	this.load.spritesheet('Ichi-Stand-R', 'images/Ichi-Stand-R.png',{frameWidth: 320.5, frameHeight: 220})
	this.load.spritesheet('Ichi-Stand-L', 'images/Ichi-Stand-L.png',{frameWidth: 320.5, frameHeight: 220})
	this.load.spritesheet('Nar-Stand', 'images/Nar-Stand-Sheet.png', {frameWidth: 152.5, frameHeight: 220})
	this.load.spritesheet('Luffy-Stand-R', 'images/Luffy-Stand-R.png', {frameWidth: 145.5, frameHeight: 220})
	this.load.spritesheet('Luffy-Stand-L', 'images/Luffy-Stand-L.png', {frameWidth: 145.5, frameHeight: 220})
	this.load.spritesheet('Goku-Stand-R', 'images/Goku-Stand-R.png', {frameWidth: 210.5, frameHeight: 220})
	this.load.spritesheet('Goku-Stand-L', 'images/Goku-Stand-L.png', {frameWidth: 210.5, frameHeight: 220})
	this.load.image('Start', 'images/Start-G.png')
	this.load.image('CharChoose', 'images/CharChoose.png')
	this.load.image('p1Text', 'images/P1.png')
	this.load.image('p2Text', 'images/P2.png')
}


menuScene.menuCreate = function() {
	this.narutoChoose1 = this.add.sprite(50, this.sys.game.config.height / 2, 'Nar-Stand').setScale(.5);
	this.ichigoChoose1 = this.add.sprite(250, this.sys.game.config.height / 2, 'Ichi-Stand-R').setScale(.5);
	this.luffyChoose1 = this.add.sprite(50, this.sys.game.config.height / 1.4, 'Luffy-Stand-R').setScale(.5);
	this.gokuChoose1 = this.add.sprite(250, this.sys.game.config.height / 1.4, 'Goku-Stand-R').setScale(.5);

	this.narutoChoose2 = this.add.sprite(1150, this.sys.game.config.height / 2, 'Nar-Stand').setScale(.5);
	this.ichigoChoose2 = this.add.sprite(950, this.sys.game.config.height / 2, 'Ichi-Stand-L').setScale(.5);
	this.luffyChoose2 = this.add.sprite(1150, this.sys.game.config.height / 1.4, 'Luffy-Stand-L').setScale(.5);
	this.gokuChoose2 = this.add.sprite(950, this.sys.game.config.height / 1.4, 'Goku-Stand-L').setScale(.5);

	this.p1Text = this.add.sprite(this.sys.game.config.width/5,280, 'p1Text').setScale(.4)
	this.p2Text = this.add.sprite(this.sys.game.config.width/1.3,280, 'p2Text').setScale(.4)
	this.charChoose = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height / 4, 'CharChoose').setScale(.5);
	this.startBtn = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height - 100, 'Start').setScale(.5);

	

	this.anims.create({
    key: 'N-left',
    frames: this.anims.generateFrameNumbers('Nar-Stand', { start: 0, end: 3 }),
    frameRate: 4,
    repeat: -1
	});

	this.anims.create({
    key: 'N-right',
    frames: this.anims.generateFrameNumbers('Nar-Stand', { start: 4, end: 7}),
    frameRate: 4,
    repeat: -1
	});

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

	this.anims.create({
	    key: 'L-right',
	    frames: this.anims.generateFrameNumbers('Luffy-Stand-R', { start: 0, end: 5}),
	    frameRate: 4,
	    repeat: -1
	});	

	this.anims.create({
	    key: 'L-left',
	    frames: this.anims.generateFrameNumbers('Luffy-Stand-L', { start: 0, end: 5}),
	    frameRate: 4,
	    repeat: -1
	});	

	this.anims.create({
	    key: 'G-left',
	    frames: this.anims.generateFrameNumbers('Goku-Stand-L', { start: 0, end: 3 }),
	    frameRate: 4,
	    repeat: -1
	});

	this.anims.create({
	    key: 'G-right',
	    frames: this.anims.generateFrameNumbers('Goku-Stand-R', { start: 0, end: 3}),
	    frameRate: 4,
	    repeat: -1
	});	

	//sets all interactives
	this.narutoChoose1.setInteractive();
	this.ichigoChoose1.setInteractive();
	this.narutoChoose2.setInteractive();
	this.ichigoChoose2.setInteractive();
	this.luffyChoose1.setInteractive();
	this.luffyChoose2.setInteractive();
	this.gokuChoose1.setInteractive();
	this.gokuChoose2.setInteractive();
	this.startBtn.setInteractive();


	
		this.narutoChoose1.on('pointerdown', () => {
			p1 = 1
			//this.scene.start(gameScene)
		});

		this.ichigoChoose1.on('pointerdown', () => {
			p1 = 2
			//this.scene.start(gameScene)
		});
	
		this.narutoChoose2.on('pointerdown', () => {
			p2 = 1
			//this.scene.start(gameScene)
		});

		this.ichigoChoose2.on('pointerdown', () => {
			p2 = 2
		})

		this.luffyChoose1.on('pointerdown', () => {
			p1 = 3
		})

		this.luffyChoose2.on('pointerdown', () => {
			p2 = 3
		})

		this.gokuChoose1.on('pointerdown', () => {
			p1 = 4
		})

		this.gokuChoose2.on('pointerdown', () => {
			p2 = 4
		})

		this.startBtn.on('pointerdown', () => {
			this.scene.start(gameScene)
		});
}

menuScene.menuUpdate = function() {
	this.narutoChoose1.anims.play('N-right', true)
	this.narutoChoose2.anims.play('N-left', true)
	this.ichigoChoose1.anims.play('I-right', true)
	this.ichigoChoose2.anims.play('I-left', true)
	this.luffyChoose1.anims.play('L-right', true)
	this.luffyChoose2.anims.play('L-left', true)
	this.gokuChoose1.anims.play('G-right', true)
	this.gokuChoose2.anims.play('G-left', true)
}