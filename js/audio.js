//sound actions
const play = 'play';
const pause = 'pause';
//sound list
const hit = 'hit';
const ooa = 'ooa'; //Out of Ammo
const pdcs = 'pdcs'; //Turrets
const explode1 = 'explode1'; //Asteroid Explosion


function procSound(sound, action, volume){
	if(world.sound && action === play){
		document.getElementById(sound).volume = volume;
		document.getElementById(sound).play();
	} else {
		document.getElementById(sound).pause();
		document.getElementById(sound).currentTime = 0;
	}
}

function soundToggle(){
	if(world.sound){
		world.sound = false;
		world.sfx = false;
		document.getElementById('music').volume = 0;
		document.getElementById('sound-off').classList.remove('hide');
		document.getElementById('sound-on').classList.add('hide');
	} else {
		world.sound = true;
		world.sfx = true;
		document.getElementById('music').volume = 1;
		document.getElementById('sound-on').classList.remove('hide');
		document.getElementById('sound-off').classList.add('hide');
	}
}