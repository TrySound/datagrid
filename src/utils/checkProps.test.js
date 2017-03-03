import { expect } from 'chai';
import checkProps from './checkProps.js';

describe('checkProps util', () => {
    it('takes a list of props names and returns a function comparator', () => {
        const compare = checkProps('param1', 'param2');
        expect(compare).to.be.a('function');
    });

    it('compares props presented in a list', () => {
        const compare = checkProps('param1', 'param2');
        expect(compare({ param1: 1, param2: 3 }, { param1: 1, param2: 3 })).to.equal(false);
        expect(compare({ param1: 1, param2: 3 }, { param1: 2, param2: 3 })).to.equal(true);
        expect(compare({ param1: 1, param2: 3 }, { param1: 2, param2: 4 })).to.equal(true);
    });

    it('does not compare props not presented in a list', () => {
        const compare = checkProps('param1');
        expect(compare({ param2: 1 }, { param2: 1 })).to.equal(false);
        expect(compare({ param2: 1 }, { param2: 2 })).to.equal(false);
    });
});
