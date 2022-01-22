import {describe, it} from 'mocha';
import {BasicInternalServer, MemoryModel} from '../../../src';
import {expect} from 'chai';

const getTestEnvironment = (): { server: BasicInternalServer<MemoryModel>; model: MemoryModel } => {
    const model = new MemoryModel();
    const server = new BasicInternalServer(model);
    return {server, model};
}

describe('basicServer', () => {
    it('서버를 통해 모델에 데이터 추가', () => {
        const {server} = getTestEnvironment();
        const key = 'name';
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(value);
    });

    it('서버와 모델 동일성 확인', () => {
        const {server, model} = getTestEnvironment();
        const key = 'name';
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(model.getData(key));
    });

    it('get() read() 동일성 확인', () => {
        const {server, model} = getTestEnvironment();
        const key = 'name';
        const value = '홍길동';
        server.set(key, value);
        expect(server.get(key)).to.be.equal(server.read(key));
    });

    it('set() create() 동일성 확인', () => {
        const {server} = getTestEnvironment();
        const key = 'name';
        const value = '홍길동';
        server.create(key, value);
        expect(server.get(key)).to.be.equal(value);
    });

    it('set() update() 동일성 확인', () => {
        const {server} = getTestEnvironment();
        const key = 'name';
        const value = '홍길동';
        server.update(key, value);
        expect(server.get(key)).to.be.equal(value);
    });
});
