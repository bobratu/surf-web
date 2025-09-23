import * as THREE from 'three';
import Core from './core/core.js';
import Controls from './core/controls.js';


const canvas = document.querySelector('#c');

const bruh = new Core(canvas);
const controls = new Controls();

function help() {
				console.log(controls.mouse);
}


bruh.loopFunctions.push(help);
