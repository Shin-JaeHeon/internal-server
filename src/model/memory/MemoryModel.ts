import {BasicModelAction} from '../../modelAction/basicModelAction';

export class MemoryModel implements BasicModelAction {
    data: any = {};

    getData<T, KEY_TYPE extends any>(key: KEY_TYPE): T {
        return this.data[key] as T;
    }

    setData<T, KEY_TYPE extends any>(key: KEY_TYPE, data: T) {
        this.data[key] = data;
    }
}
