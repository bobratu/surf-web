import * as THREE from 'three';

class Controls {
	constructor() {
		this.keys = {};
		const keyMap = new Map();


		const setKey = (keyName, pressed) => {
			const keyState = this.keys[keyName];
			keyState.justPressed = pressed && !keyState.down;
			keyState.down = pressed;
		}

		const addKey = (keyCode, name) => {
			this.keys[name] = { down: false, justPressed: false };
			keyMap.set(keyCode, name);
		}

		const setKeyFromKeyCode = (keycode, pressed) => {
			const keyName = keyMap.get(keycode);
			if (!keyName) {
				return;
			}
			setKey(keyName, pressed);
		}


		window.addEventListener('keydown', (e) => {
			setKeyFromKeyCode(e.keyCode, true);
		});

		window.addEventListener('keyup', (e) => {
			setKeyFromKeyCode(e.keyCode, false);
		});


		addKey(87, "w");
		addKey(65, "a");
		addKey(68, "d");
		addKey(83, "s");
		addKey(32, "space");



		// mouse 

		this.mouse = new THREE.Vector2();

		window.addEventListener('mousemove', (event) => {
			this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		})
	}

	getKey = (keyName) => {
		return this.keys[keyName];
	}

}
export default Controls;
