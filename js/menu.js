menuScene.menuLoad = function() {
	this.narutoChoose1 = this.add.sprite(50, this.sys.game.config.height / 2, 'Nar-Stand');
	this.ichigoChoose1 = this.add.sprite(250, this.sys.game.config.height / 2, 'Ichi-Stand-R');

	this.narutoChoose2 = this.add.sprite(550, this.sys.game.config.height / 2, 'Nar-Stand');
	this.ichigoChoose2 = this.add.sprite(750, this.sys.game.config.height / 2, 'Ichi-Stand-L');
	this.gogo = this.add.sprite(550, this.sys.game.config.height / 4, 'Nar-Stand').setScale(.5);

	this.narutoChoose1.setScale(.5)
	this.ichigoChoose1.setScale(.5)
	this.narutoChoose2.setScale(.5)
	this.ichigoChoose2.setScale(.5)

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

	this.narutoChoose1.setInteractive();
	this.ichigoChoose1.setInteractive();
	this.narutoChoose2.setInteractive();
	this.ichigoChoose2.setInteractive();
	this.gogo.setInteractive();


	
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

		this.gogo.on('pointerdown', () => {

			this.scene.start(gameScene)
		});
}

menuScene.menuUpdate = function() {
	this.narutoChoose1.anims.play('right', true)
	this.narutoChoose2.anims.play('left', true)
	this.ichigoChoose1.anims.play('I-right', true)
	this.ichigoChoose2.anims.play('I-left', true)
}