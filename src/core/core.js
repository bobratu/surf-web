import * as THREE from 'three';
import GameCamera from './game_camera'
class Core {


				constructor(canvas) {
								this.canvas = canvas;
								this.renderer = new THREE.WebGLRenderer({antialias: true, canvas: canvas});
								this.scene = new THREE.Scene();
								this.camera = new GameCamera(90,2,0.1,5,this.scene);
								
								this.loopFunctions = [];
								this.animate();


				}

				animate = (time) => {
								this.renderer.render(this.scene,this.camera.threeCamera);
								this.resizeRenderer();

								this.loopFunctions.forEach(func => {
												func();
								})

								requestAnimationFrame(this.animate);
				}

				resizeRenderer = () => {
								const canvas = this.renderer.domElement;
								const width = canvas.clientWidth;
								const height = canvas.clientHeight;
								const needResize = canvas.width !== width || canvas.height !== height;
							
								if (needResize) {
												this.renderer.setSize(width, height, false);

								}
				}


}

export default Core;
