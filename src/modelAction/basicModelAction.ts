export interface BasicModelAction {
    getData<T, KEY_TYPE extends any>(key: KEY_TYPE): T;

    setData<T, KEY_TYPE extends any>(key: KEY_TYPE, data: T);
}
