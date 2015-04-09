function begin() {

	var steps = 100;
	var defaultVolume = 0.5;
	
	var volPow = 2;

	var wind = new Howl({
		src: ['Sounds/LoopingWind.ogg'],
		autoplay: true,
		loop: true,
		volume: Math.pow(defaultVolume, volPow),
	});

	wind.play();
	
	var slider = $( "#slider" );
	
	slider.slider({
		range: "min",
		min: 0,
		max: steps,
		value: steps*defaultVolume,
		slide: function(event, ui) {
			var vol = slider.slider('value')/steps;
			wind.volume(Math.pow(vol, volPow));
		}
	});
}