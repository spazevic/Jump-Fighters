//loads music depending on which characters are chosen
gameScene.musicPre = function() {
	  if (p1 == 1 && p2 == 1) {
		this.load.audio('battle', 'sounds/Strong and Strike.mp3')
	} else if (p1 == 1 && p2 == 2) {
		this.load.audio('battle', 'sounds/Avenger.mp3')
	} else if (p1 == 1 && p2 == 3) {
		this.load.audio('battle', 'sounds/Sunspot.mp3')
	} else if (p1 == 1 && p2 == 4) {
		this.load.audio('battle', 'sounds/Rock Lee Theme.mp3')
	} else if (p1 == 2 && p2 == 1) {
		this.load.audio('battle', 'sounds/La Distancia Para Un Duelo.mp3')
	} else if (p1 == 2 && p2 == 2) {
		this.load.audio('battle', 'sounds/Number One.mp3')
	} else if (p1 == 2 && p2 == 3) {
		this.load.audio('battle', 'sounds/Battle Ignition.mp3')
	} else if (p1 == 2 && p2 == 4) {
		this.load.audio('battle', 'sounds/Number One.mp3')
	} else if (p1 == 3 && p2 == 1) {
		this.load.audio('battle', 'sounds/Sunspot.mp3')
	} else if (p1 == 3 && p2 == 2) {
		this.load.audio('battle', 'sounds/Battle Ignition.mp3')
	} else if (p1 == 3 && p2 == 3) {
		this.load.audio('battle', 'sounds/Luffy Moukou.mp3')
	} else if (p1 == 3 && p2 == 4) {
		this.load.audio('battle', 'sounds/Luffy Moukou.mp3')
	} else if (p1 == 4 && p2 == 1) {
		this.load.audio('battle', 'sounds/SSJ3 Power Up.m4a')
	} else if (p1 == 4 && p2 == 2) {
		this.load.audio('battle', 'sounds/DragonBall Z.m4a')
	} else if (p1 == 4 && p2 == 3) {
		this.load.audio('battle', 'sounds/Three Towers.mp3')
	} else if (p1 == 4 && p2 == 4) {
		this.load.audio('battle', 'sounds/West City.mp3')
	} else {
		this.load.audio('battle', 'sounds/Three Towers.mp3')
	}
}

//plays chosen music
gameScene.musicCreate = function() {
	music = this.sound.add('battle')
	music.play()
}





//stops music when game ends
gameScene.musicStop = function() {
	music.stop()
}
