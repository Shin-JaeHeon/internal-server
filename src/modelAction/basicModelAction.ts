export interface BasicModelAction<KEY_TYPE = any, DATA_TYPE = any> {
    getData(key: KEY_TYPE): DATA_TYPE;

    setData(key: KEY_TYPE, data: DATA_TYPE);
}
