import Loop from '../core/loop'
import Core from '../core/core'
import Controls from '../core/controls';
import { Vector3 } from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import * as THREE from 'three';

class Freecam extends Loop {
    controls;
    constructor(core) {
        super(core);
        
        this.controls = new PointerLockControls(this.core.camera.threeCamera, document.body);

        document.body.addEventListener('click', () => {
            this.controls.lock();
        });

        this.bind_to_loop(this.loop);
    }

    loop = () => {
       const controls = this.core.controls;
       if (controls.getKey("w").down) {
        this.core.camera.threeCamera.translateZ(-0.1);
       }

       if (controls.getKey("s").down)  {
        this.core.camera.threeCamera.translateZ(0.1);
       }

       if (controls.getKey("a").down)  {
        this.core.camera.threeCamera.translateX(-0.1);
       }

       if (controls.getKey("d").down) {
        this.core.camera.threeCamera.translateX(0.1);
       }
      
    }


};
export default Freecam;