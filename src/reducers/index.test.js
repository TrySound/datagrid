import { expect } from 'chai';
import reducer from './index.js';

const randomAction = {
    type: '__RANDOM_ACTION__'
};

describe('reducer', () => {
    it('inits', () => {
        expect(
            reducer(undefined, randomAction)
        ).to.deep.equal({
            columns: [],
            rowState: {}
        });
    });

    it('saves previous user state', () => {
        expect(
            reducer({
                userState: {
                    param: 1
                }
            }, randomAction)
        ).to.deep.equal({
            userState: {
                param: 1
            },
            columns: [],
            rowState: {}
        });
    });
});
