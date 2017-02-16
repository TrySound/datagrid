import { expect } from 'chai';
import { bisectColumns } from './index.js';

describe('bisectColumns', () => {
    it('selects first if no one column is present', () => {
        expect(bisectColumns([], 200)).to.deep.equal([-1, 0]);
    });

    it('selects first if only one column is present', () => {
        expect(bisectColumns([
            { width: 60 }
        ], 200)).to.deep.equal([-1, 0]);
    });

    it('selects first column if position is negative', () => {
        expect(bisectColumns([
            { width: 60 },
            { width: 60 }
        ], -20)).to.deep.equal([-1, 0]);
    });

    it('selects last column if position is greater than all columns width', () => {
        expect(bisectColumns([
            { width: 60 },
            { width: 60 }
        ], 200)).to.deep.equal([1, -1]);
    });

    it('selects previous and current if position in column is less than half', () => {
        expect(bisectColumns([
            { width: 60 },
            { width: 60 },
            { width: 60 }
        ], 89)).to.deep.equal([0, 1]);
    });

    it('selects current and next if position in column is greater or equal than half', () => {
        expect(bisectColumns([
            { width: 60 },
            { width: 60 },
            { width: 60 }
        ], 90)).to.deep.equal([1, 2]);
    });
});