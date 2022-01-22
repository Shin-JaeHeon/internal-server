import {BasicModelController} from '../../controller/basicModelController';

export class BasicInternalServer<Model extends BasicModelController> {

    constructor(private data: Model) {
    }

    get<T, KEY_TYPE extends any>(key: KEY_TYPE): T {
        return this.data.getData(key);
    }

    read<T, KEY_TYPE extends any>(key: KEY_TYPE): T {
        return this.get(key);
    }

    set<T, KEY_TYPE extends any>(key: KEY_TYPE, data: T) {
        this.data.setData(key, data);
    }

    create<T, KEY_TYPE extends any>(key: KEY_TYPE, data: T) {
        this.set(key, data);
    }

    update<T, KEY_TYPE extends any>(key: KEY_TYPE, data: T) {
        this.set(key, data);
    }
}
