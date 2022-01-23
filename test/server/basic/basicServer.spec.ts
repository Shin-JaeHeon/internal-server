import {describe, it} from 'mocha';
import {BasicInternalServer, MemoryModel} from '../../../src';
import {expect} from 'chai';
import {LocalStorageModel} from '../../../src/model/browserStorage/localStorageModel';

// @ts-ignore
// noinspection JSConstantReassignment
global.window = {};
import 'mock-local-storage';
// @ts-ignore
// noinspection JSConstantReassignment
window.localStorage = global.localStorage;


const getUniqueKey = (key: string): string => key + String(Math.random());


const getTestEnvironment = (): { server: BasicInternalServer<any, any, MemoryModel>; model: MemoryModel } => {
    const model = new MemoryModel();
    const server = new BasicInternalServer(model);
    return {server, model};
}

describe('basicServer', () => {
    it('서버를 통해 모델에 데이터 추가', () => {
        const {server} = getTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(value);
    });

    it('서버와 모델 동일성 확인', () => {
        const {server, model} = getTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(model.getData(key));
    });

    it('get() read() 동일성 확인', () => {
        const {server, model} = getTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(server.read(key));
    });

    it('set() create() 동일성 확인', () => {
        const {server} = getTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.create(key, value);
        expect(server.get(key)).to.be.equal(value);
    });

    it('set() update() 동일성 확인', () => {
        const {server} = getTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.update(key, value);
        expect(server.get(key)).to.be.equal(value);
    });
});

describe('localStorage Server', () => {

    const getLocalStorageTestEnvironment = (): { server: BasicInternalServer<string, any, LocalStorageModel>; model: LocalStorageModel } => {
        const model = new LocalStorageModel();
        const server = new BasicInternalServer<string, any, LocalStorageModel>(model);
        return {server, model};
    };

    it('h', () => {
        const {server} = getLocalStorageTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(value);
    });

    it('서버를 통해 모델에 데이터 추가', () => {
        const {server} = getLocalStorageTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(value);
    });

    it('서버와 모델 동일성 확인', () => {
        const {server, model} = getLocalStorageTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(model.getData(key));
    });

    it('get() read() 동일성 확인', () => {
        const {server} = getLocalStorageTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(server.read(key));
    });

    it('set() create() 동일성 확인', () => {
        const {server} = getLocalStorageTestEnvironment();
        const key = getUniqueKey('name');
        const value = '홍길동';
        server.create(key, value);
        expect(server.get(key)).to.be.equal(value);
    });


    it('없는 아이템 갖고오면 {} 노출', () => {
        const {server} = getLocalStorageTestEnvironment();
        const key = getUniqueKey('noname');
        expect(server.get(key)).to.be.deep.equal({});
    });
});
