import {BasicModelAction} from '../../modelAction/basicModelAction';

export class BasicInternalServer<KEY_TYPE, DATA_TYPE, Model extends BasicModelAction<KEY_TYPE, DATA_TYPE>> {

    constructor(private data: Model) {
    }

    get(key: KEY_TYPE) {
        return this.data.getData(key);
    }

    read(key: KEY_TYPE): DATA_TYPE {
        return this.get(key);
    }

    set(key: KEY_TYPE, data: DATA_TYPE) {
        this.data.setData(key, data);
    }

    create(key: KEY_TYPE, data: DATA_TYPE) {
        this.set(key, data);
    }

    update(key: KEY_TYPE, data: DATA_TYPE) {
        this.set(key, data);
    }
}
