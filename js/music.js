gameScene.musicPre = function() {
	if (music == 1) {
	this.load.audio('battle', 'sounds/West City.mp3')
	}
}


gameScene.musicCreate = function() {
	music = this.sound.add('battle')
	music.play()
}






gameScene.musicStop = function() {

	music.stop()
}
