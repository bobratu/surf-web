import Loop from '../core/loop'
import Core from '../core/core'
import Controls from '../core/controls';


class Freecam extends Loop {
    controls;
    constructor(core) {
        super(core);
        this.bind_to_loop(this.loop);
    }

    loop = () => {
       
    }


};
export default Freecam;