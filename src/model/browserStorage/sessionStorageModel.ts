import {StringKeyBasicModelAction} from '../../modelAction/stringKeyBasicModelAction';

export class SessionStorageModel implements StringKeyBasicModelAction {
    getData<KEY_TYPE extends string>(key: KEY_TYPE) {
        return JSON.parse(window.sessionStorage.getItem(key) ?? '{}');
    }

    setData(key: string, data: any) {
        window.sessionStorage.setItem(key, JSON.stringify(data));
    }
}
