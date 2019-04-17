#!/usr/bin/env node

const program = require('commander');
const shell = require('shelljs');

const VERSION = '0.0.1';
const CWD = process.cwd();

program.version(VERSION)
	.option('-n, --name [optional]', 'name the project, default is "story"')
	.parse(process.argv);

// arguments
let { name } = program;
name = name || 'story';

async function download() {
	console.log('downloading starter template...');
	const command = 'curl -Lk https://bit.ly/2J0L3MD > Makefile; make setup;'
	try {
		shell.exec(command);
		return Promise.resolve();
	} catch(error) {
		return Promise.reject('error downloading contents');
	}
}

async function init() {
	try {
		await download();
		console.log('finished!');
	} catch(error) {
		console.error(error);
	}
	
	process.exit();
}

init();









