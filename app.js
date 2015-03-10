var keypress = require('keypress'),
	fs = require('fs'),
	clc = require('cli-color');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// import code outputs
var codeBlock,
	codeBlockPlaceBefore = 0
	codeBlockPlaceAfter = 5;

// if code choice is made, use that
if(process.argv.slice(2).length !== 0) {
	var fileName = process.argv.slice(2)[0];
	fileName = fileName.replace(/-/g, '');
	fs.readFile( __dirname + '/code/' + fileName + '.txt', function (err, data) {
		if (err) {
			throw err;
		}
		codeBlock = data.toString();
	});
} else {
	fs.readFile( __dirname + '/code/code.txt', function (err, data) {
		if (err) {
			throw err;
		}
		codeBlock = data.toString();
	});
}

// set out colors
var msg = clc.xterm(47).bgXterm(0);

process.stdout.write(msg('\u001B[2J\u001B[0;0f'));

// listen for inputs
process.stdin.on('keypress', function (ch, key) {
	if (key && key.ctrl && key.name == 'c') {
		msg = clc.xterm(0).bgXterm(231);
		process.stdout.write(msg('\u001B[2J\u001B[0;0f'));
		process.stdin.pause();
	};
	process.stdout.write(msg(codeBlock.substring(codeBlockPlaceBefore, codeBlockPlaceAfter)));
	codeBlockPlaceBefore = codeBlockPlaceBefore + 5;
	codeBlockPlaceAfter = codeBlockPlaceAfter + 5;
	if (codeBlock.substring(codeBlockPlaceBefore, codeBlockPlaceAfter).indexOf('};') != -1) {
		codeBlockPlaceBefore = 0
		codeBlockPlaceAfter = 5;
	}
});

process.stdin.setRawMode(true);
process.stdin.resume();