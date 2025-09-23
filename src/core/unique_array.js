class Unique_Array {
    constructor() {
        this.map = new Map();
    }

    add = (obj) => {
        const uuid = crypto.randomUUID();
        this.map.set(uuid,obj);
        return uuid;
    }

    remove = (uuid) => {
        this.map.delete(uuid);
    } 

    getAll = () => {
        return this.map.values();
    }

}