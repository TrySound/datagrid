import { getVisibleRows } from './index.js';

describe('getVisibleRows', () => {
    it('at the start', () => {
        expect(
            getVisibleRows({
                viewportHeight: 100,
                rowHeight: 12,
                rowsCount: 60,
                scrollTop: 0
            })
        ).toEqual([0, 18]);
    });

    it('between the first and the second sectors', () => {
        expect(
            getVisibleRows({
                viewportHeight: 100,
                rowHeight: 12,
                rowsCount: 60,
                scrollTop: 9 * 12 - 1
            })
        ).toEqual([0, 18]);
        expect(
            getVisibleRows({
                viewportHeight: 100,
                rowHeight: 12,
                rowsCount: 60,
                scrollTop: 9 * 12
            })
        ).toEqual([9, 27]);
    });

    it('between the second and the third sectors', () => {
        expect(
            getVisibleRows({
                viewportHeight: 100,
                rowHeight: 12,
                rowsCount: 60,
                scrollTop: 18 * 12 - 1
            })
        ).toEqual([9, 27]);
        expect(
            getVisibleRows({
                viewportHeight: 100,
                rowHeight: 12,
                rowsCount: 60,
                scrollTop: 18 * 12
            })
        ).toEqual([18, 36]);
    });

    it('should save count of visible rows the same to not lost focus', () => {
        expect(
            getVisibleRows({
                viewportHeight: 100,
                rowHeight: 12,
                rowsCount: 54,
                scrollTop: 52 * 12 - 100
            })
        ).toEqual([36, 54]);
        expect(
            getVisibleRows({
                viewportHeight: 100,
                rowHeight: 12,
                rowsCount: 60,
                scrollTop: 60 * 12 - 100
            })
        ).toEqual([42, 60]);
    });

    it('should save count of visible rows with negative scrollTop', () => {
        expect(
            getVisibleRows({
                viewportHeight: 100,
                rowHeight: 12,
                rowsCount: 60,
                scrollTop: -20
            })
        ).toEqual([0, 18]);
    });
});
