import Unique_Array from "./unique_array";
class Loop {
    #uuid;
    #unique_array;
    constructor() {
        this.#unique_array = Unique_Array()
        this.#uuid = this.#unique_array.add(this.loop);
    }

    loop = () => {
        
    }

    unbind_from_loop = () => {
        this.#unique_array.remove(this.#uuid);
    }
    
}