import Unique_Array from "./unique_array";
class Loop {
    core;
    #uuid;
    constructor(core) {
        this.core = core;
    }

    bind_to_loop(func) {
        this.#uuid = this.core.loopFunctions.add(func);
    }

    unbind_from_loop = () => {
        this.core.loopFunctions.remove(this.#uuid);
    }
    
}

export default Loop;