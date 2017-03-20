import reducer from './index.js';

const randomAction = {
    type: '__RANDOM_ACTION__'
};

describe('reducer', () => {
    it('inits', () => {
        expect(
            reducer(undefined, randomAction)
        ).toEqual({
            columns: [],
            gridState: {}
        });
    });

    it('saves previous user state', () => {
        expect(
            reducer({
                userState: {
                    param: 1
                }
            }, randomAction)
        ).toEqual({
            userState: {
                param: 1
            },
            columns: [],
            gridState: {}
        });
    });
});
