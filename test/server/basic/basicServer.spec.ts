import {describe, it} from 'mocha';
import {BasicInternalServer} from '../../../src';
import {expect} from 'chai';

describe('basicServer', () => {

    describe('initialize', () => {
        const server = new BasicInternalServer();

        it('server의 data는 1', () => {
            server.initialize(1);
            expect(server.fetchDataAll()).to.be.equal(1);
        })
    });
});
