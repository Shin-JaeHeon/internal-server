import {StringKeyBasicModelAction} from '../../modelAction/stringKeyBasicModelAction';

export class LocalStorageModel implements StringKeyBasicModelAction {
    getData<KEY_TYPE extends string>(key: KEY_TYPE) {
        return JSON.parse(window.localStorage.getItem(key) ?? '{}');
    }

    setData(key: string, data: any) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}
