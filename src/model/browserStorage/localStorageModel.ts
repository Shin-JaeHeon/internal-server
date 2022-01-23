import {StringKeyBasicModelAction} from '../../modelAction/stringKeyBasicModelAction';

export class LocalStorageModel implements StringKeyBasicModelAction {
    getData<DATA_TYPE extends any>(key: string): DATA_TYPE {
        return JSON.parse(window.localStorage.getItem(key) ?? '{}');
    }

    setData(key: string, data: any) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}
