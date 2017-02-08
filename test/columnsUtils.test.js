import { expect } from 'chai';
import { trimColumnWidth, getColumnWidth, bisectColumns } from '../src/columnsUtils.js';

describe('columnUtils', () => {
    describe('trimColumnWidth', () => {
        it('trims value with minWidth', () => {
            expect(trimColumnWidth({ minWidth: 100 }, 90)).to.deep.equal(100);
        });

        it('trims value with maxWidth', () => {
            expect(trimColumnWidth({ maxWidth: 200 }, 210)).to.deep.equal(200);
        });

        it('trims with default minWidth 20', () => {
            expect(trimColumnWidth({}, 10)).to.deep.equal(60);
        });

        it('does not trim in range', () => {
            expect(trimColumnWidth({}, 500)).to.deep.equal(500);
        });
    });

    describe('getColumnWidth', () => {
        it('returns width if present', () => {
            expect(getColumnWidth({ minWidth: 20, width: 30 })).to.deep.equal(30);
        });

        it('fallbacks to minWidth', () => {
            expect(getColumnWidth({ minWidth: 20 })).to.deep.equal(20);
        });

        it('fallbacks to default minWidth', () => {
            expect(getColumnWidth({})).to.deep.equal(60);
        });
    });

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
            ], 200)).to.deep.equal([1, 2]);
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
});
