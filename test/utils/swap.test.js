import 'es6-shim';
import { expect } from 'chai';
import { swap } from '../../src/utils.js';

describe('swap', () => {
    it('should swap elements in array', () => {
        expect(swap([1, 2, 3], d => d === 1, d => d === 3)).to.deep.equal([3, 2, 1]);
    });

    it('should use getter for objects', () => {
        expect(swap([
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            }
        ], d => d.id === 1, d => d.id === 3)).to.deep.equal([
            {
                id: 3
            },
            {
                id: 2
            },
            {
                id: 1
            }
        ]);
    })
});
