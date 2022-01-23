import {BasicModelAction} from './basicModelAction';

export interface StringKeyBasicModelAction extends BasicModelAction<string> {
    getData<KEY_TYPE extends string>(key: KEY_TYPE);

    setData<KEY_TYPE extends string>(key: KEY_TYPE, data);
}
