import Loop from '../core/loop'
import Core from '../core/core'
import * as THREE from 'three';

class CubeSpin extends Loop {
    controls;
    cube;
    constructor(core) {
        super(core);

        const boxGeometry = new THREE.BoxGeometry(5,5,5,1);
        const material = new THREE.MeshNormalMaterial();
        this.cube = new THREE.Mesh(boxGeometry,material);

        this.core.scene.add(this.cube);


        this.bind_to_loop(this.loop);
    }

    loop = () => {
        this.cube.rotation.x += 0.001;
    }


};
export default CubeSpin;