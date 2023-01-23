#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var meow = require('meow');
var bluetooth = require('./');

var cli = meow([
	'Example',
	'  $ bluetooth',
	'  $ bluetooth on',
	'  $ bluetooth off'
]);

if (cli.input.length) {
	if (cli.input[0] !== 'on' && cli.input[0] !== 'off') {
		console.log('Set bluetooth state to either `on` or `off`');
		process.exit(3);
	}

	var state = cli.input[0] === 'on';

	bluetooth.toggle(state).then(function () {
		console.log(state ? logSymbols.success + ' On' : logSymbols.error + ' Off');
		process.exit(state ? 0 : 1);
	});
} else {
	bluetooth.isOn().then(function (state) {
		console.log(state ? logSymbols.success + ' On' : logSymbols.error + ' Off');
		process.exit(state ? 0 : 1);
	});
}
