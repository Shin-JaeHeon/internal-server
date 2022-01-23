import {StringKeyBasicModelAction} from '../../modelAction/stringKeyBasicModelAction';

export class StringKeyBasicServer<Model extends StringKeyBasicModelAction> {

    constructor(private data: Model) {
    }

    get<T>(key: string): T {
        return this.data.getData(key);
    }

    read<T>(key: string): T {
        return this.get(key);
    }

    set<T>(key: string, data: T) {
        this.data.setData(key, data);
    }

    create<T>(key: string, data: T) {
        this.set(key, data);
    }

    update<T>(key: string, data: T) {
        this.set(key, data);
    }
}
