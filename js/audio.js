//SFX CONST VOLUMES

const V_HIT = 0.2;
const V_PDCS = 0.4;
const V_EXP = 0.2;
const V_OOA = 0.4;

//sound actions
const play = 'play';
const pause = 'pause';
//sound list
const hit = 'hit';
const ooa = 'ooa'; //Out of Ammo
const pdcs = 'pdcs'; //Turrets
const explode1 = 'explode1'; //Asteroid Explosion

//If we want to do deferred loading we could have this lazily-initialize by checking for it the first
//time we try to use it and find it to be undefined.
const musicElement = document.getElementById('music');
const soundOffElement = document.getElementById('sound-off');
const soundOnElement = document.getElementById('sound-on');

function playSound(sound, volume){
	const soundElement = document.getElementById(sound);
	soundElement.volume = volume;
	soundElement.play();
};

function pauseSound(sound, volume){
	const soundElement = document.getElementById(sound);
	soundElement.pause();
	soundElement.currentTime = 0;
};

function soundToggle(){
	if(world.sound){
		world.sound = false;
		world.sfx = false;
		
		//Setting of css attributes onto objects we want off or on.
		//Hide the soundOnElement because the world has sound.
		//We only have the ability to turn off the soundOnElement
		musicElement.volume = 0;
		soundOffElement.classList.remove('hide');
		soundOnElement.classList.add('hide');
	} else {
		world.sound = true;
		world.sfx = true;
		musicElement.volume = 1;
		
		//Hide the soundOffElement because the world doesn't have sound.
		//We only have the ability to turn on the soundOnElement
		soundOnElement.classList.remove('hide');
		soundOffElement.classList.add('hide');
	}
};