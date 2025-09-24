import * as THREE from 'three';
import GameCamera from './game_camera'
import Unique_Array from './unique_array';
import Controls from './controls';
class Core {


	constructor(canvas) {
		this.canvas = canvas;
		this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
		this.scene = new THREE.Scene();
		this.controls = new Controls();
		this.camera = new GameCamera(90, 2, 0.1, 500, this.scene);
		this.loopFunctions = new Unique_Array();
		this.animate();
	}

	animate = (time) => {
		this.renderer.render(this.scene, this.camera.threeCamera);
		this.resizeRenderer();

		const funcIterator = this.loopFunctions.getAll();

		var func = funcIterator.next();

		while (!func.done) {
			(func.value)();
			func = funcIterator.next();
		}


		requestAnimationFrame(this.animate);
	}

	resizeRenderer = () => {
		const canvas = this.renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;

		if (needResize) {
			this.renderer.setSize(width, height, false);
			this.camera.threeCamera.updateProjectionMatrix();

		}
	}


}

export default Core;
