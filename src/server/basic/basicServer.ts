import {BasicModelController} from '../../controller/basicModelController';

export class BasicInternalServer<Model extends BasicModelController> {

    constructor(private data: Model) {
    }

    read<T, KEY_TYPE extends any>(key: KEY_TYPE): T {
        return this.data.getData(key);
    }

    set<T, KEY_TYPE extends any>(key: KEY_TYPE, data: T) {
        return this.data.setData(key, data);
    }
}
