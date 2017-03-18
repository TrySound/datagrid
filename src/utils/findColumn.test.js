import findColumn from './findColumn.js';

describe('findColumn util', () => {
    it('finds column by width property', () => {
        expect(
            findColumn([{ width: 25 }, { width: 25 }, { width: 25 } ], 40)
        ).toEqual([1, 15]);
    });

    it('finds column in the edge of the first one', () => {
        expect(
            findColumn([{ width: 25 }], 0)
        ).toEqual([0, 0]);
    });

    it('returns -1 for preseding x', () => {
        expect(
            findColumn([{ width: 25 }], -5)
        ).toEqual([-1, -5]);
    });

    it('finds column in the edge of two ones', () => {
        expect(
            findColumn([{ width: 25 }, { width: 25 }], 25)
        ).toEqual([1, 0]);
    });

    it('finds column in the edge of the last one', () => {
        expect(
            findColumn([{ width: 25 }], 25)
        ).toEqual([0, 25]);
    });

    it('returns count of columns for following x', () => {
        expect(
            findColumn([{ width: 25 }], 30)
        ).toEqual([1, 5]);
    });

    it('returns -1 when there is no one column ', () => {
        expect(
            findColumn([], -10)
        ).toEqual([-1, -10]);
        expect(
            findColumn([], 10)
        ).toEqual([-1, 10]);
    });
});
