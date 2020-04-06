


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
		this.load.audio('battle', 'sounds/Battle Iginition.mp3')
	} else if (p1 == 2 && p2 == 4) {
		this.load.audio('battle', 'sounds/Number One.mp3')
	} else if (p1 == 3 && p2 == 1) {
		this.load.audio('battle', 'sounds/Battle Iginition.mp3')
	} else if (p1 == 3 && p2 == 2) {
		this.load.audio('battle', 'sounds/Battle Iginition.mp3')
	} else if (p1 == 3 && p2 == 3) {
		this.load.audio('battle', 'sounds/Luffy Moukou.mp3')
	} else if (p1 == 3 && p2 == 4) {
		this.load.audio('battle', 'sounds/Luffy Moukou.mp3')
	} else if (p1 == 4 && p2 == 1) {
		this.load.audio('battle', 'sounds/SSJ3 Power Up.mp3')
	} else if (p1 == 4 && p2 == 2) {
		this.load.audio('battle', 'sounds/Dragonball Z.mp3')
	} else if (p1 == 4 && p2 == 3) {
		this.load.audio('battle', 'sounds/Three Towers.mp3')
	} else if (p1 == 4 && p2 == 4) {
		this.load.audio('battle', 'sounds/West City.mp3')
	} else {
		this.load.audio('battle', 'sounds/Three Towers.mp3')
	}
}


gameScene.musicCreate = function() {
	music = this.sound.add('battle')
	music.play()
}






gameScene.musicStop = function() {
	music.stop()
}
