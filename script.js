function init() {
	document.body.addEventListener('click', fullscreen);
	document.querySelector("img").addEventListener('click', fullscreen);
}

function fullscreen() {
	this.webkitRequestFullscreen();
}

document.addEventListener('DOMContentLoaded', init);


	
