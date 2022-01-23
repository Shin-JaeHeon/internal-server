export interface StringKeyBasicModelAction {
    getData<DATA_TYPE extends any>(key: string): DATA_TYPE;

    setData<DATA_TYPE extends any>(key: string, data: DATA_TYPE);
}
