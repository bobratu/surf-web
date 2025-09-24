import * as THREE from 'three';
import Core from './core/core.js';
import Controls from './core/controls.js';
import Loop from './core/loop.js'
import UniqueArray from './core/unique_array.js'
import CubeSpin from './game/cubespin.js'
import Freecam from './game/freecam.js';



const canvas = document.querySelector('#c');

const core = new Core(canvas);
const cubespin = new CubeSpin(core);
const freecam = new Freecam(core);





