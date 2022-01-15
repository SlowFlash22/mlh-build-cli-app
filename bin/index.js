#! /usr/bin/env node
//import boxen from 'boxen';

const chalk = require('chalk');
const boxen = require('boxen');

const name = chalk.white('Name') + ': ' + chalk.green('Prajjwal Mathur');
const website =
	chalk.white('Webiste') + ': ' + chalk.green('https://bio.link/slowflash');
const twitter =
	chalk.white('Twitter') +
	': ' +
	chalk.green('https://twitter.com/_slowflash_');
const github =
	chalk.white('GitHub') + ': ' + chalk.green('https://github.com/SlowFlash22');

const box = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
	borderColor: 'green',
};

const message = boxen(`${name}\n${website}\n${twitter}\n${github}`, box);

console.log(message);