var board = new DrawingBoard.Board('home-board', {
	controls: [
		'Color',
		{ Size: { type: 'dropdown' } },
		{ DrawingMode: { filler: true } },
		'Navigation'
	],
	size: 1,
	webStorage: 'session',
	enlargeYourContainer: true
});
