import checkProps from './checkProps.js';

describe('checkProps util', () => {
    it('takes a list of props names and returns a function comparator', () => {
        const compare = checkProps('param1', 'param2');
        expect(typeof compare).toEqual('function');
    });

    it('compares props presented in a list', () => {
        const compare = checkProps('param1', 'param2');
        expect(compare({ param1: 1, param2: 3 }, { param1: 1, param2: 3 })).toEqual(false);
        expect(compare({ param1: 1, param2: 3 }, { param1: 2, param2: 3 })).toEqual(true);
        expect(compare({ param1: 1, param2: 3 }, { param1: 2, param2: 4 })).toEqual(true);
    });

    it('does not compare props not presented in a list', () => {
        const compare = checkProps('param1');
        expect(compare({ param2: 1 }, { param2: 1 })).toEqual(false);
        expect(compare({ param2: 1 }, { param2: 2 })).toEqual(false);
    });
});
