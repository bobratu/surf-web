import * as THREE from 'three';


class GameCamera {
	constructor(fov, aspect, near, far, scene) {
		this.fov = fov;
		this.aspect = aspect;
		this.near = near;
		this.far = far;
		this.threeCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		this.threeCamera.position.z = 6;
		this._position = this.threeCamera.position;
		this.scene = scene;



	}

	set position(newPosition) {
		this._position = newPosition;
		this.threeCamera.position = newPosition;
	}

	get position() {
		return this._position;
	}


	getMouseObject() {
		const raycaster = new THREE.Raycaster();
		const objects = raycaster.intersectObjects(this.scene.children);

		if (objects.length) {
			return objects[0].object;
		}
		return null
	}
}


export default GameCamera;
