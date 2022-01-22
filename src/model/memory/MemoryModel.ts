import {BasicModelController} from '../../constroller/basicModelController';

export class MemoryModel implements BasicModelController {
    data: any = {};

    getData<T, KEY_TYPE extends any>(key: KEY_TYPE): T {
        return this.data[key] as T;
    }

    setData<T, KEY_TYPE extends any>(key: KEY_TYPE, data: T) {
        this.data[key] = data;
    }
}
