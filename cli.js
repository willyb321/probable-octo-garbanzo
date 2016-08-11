#!/usr/bin/env node
'use strict';
const meow = require('meow');
const probableOctoGarbanzo = require('./');

const cli = meow(`
	Usage
	  $ probable-octo-garbanzo [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ probable-octo-garbanzo
	  unicorns & rainbows
	  $ probable-octo-garbanzo ponies
	  ponies & rainbows
`);

console.log(probableOctoGarbanzo(cli.input[0] || 'unicorns'));
