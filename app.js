var keypress = require('keypress'),
	fs = require('fs');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// import code outputs
var codeBlock,
	codeBlockPlaceBefore = 0
	codeBlockPlaceAfter = 5;
fs.readFile( __dirname + '/code.txt', function (err, data) {
	if (err) {
		throw err;
	}
	codeBlock = data.toString();
});

process.stdin.on('keypress', function (ch, key) {
	if (key && key.ctrl && key.name == 'c') {
		process.stdin.pause();
	};
	process.stdout.write(codeBlock.substring(codeBlockPlaceBefore, codeBlockPlaceAfter));
	codeBlockPlaceBefore = codeBlockPlaceBefore + 5;
	codeBlockPlaceAfter = codeBlockPlaceAfter + 5;
	if (codeBlock.substring(codeBlockPlaceBefore, codeBlockPlaceAfter).indexOf('};') != -1) {
		codeBlockPlaceBefore = 0
		codeBlockPlaceAfter = 5;
	}
});

process.stdin.setRawMode(true);
process.stdin.resume();