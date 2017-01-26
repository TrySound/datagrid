import { computeLayout } from '../src/utils.js';

describe('utils', () => {
    describe('computeLayout', () => {
        it('in the beginning', () => {
            expect(
                computeLayout({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 0
                })
            ).toEqual({
                start: 0,
                end: 18
            });
        });

        it('between the first and the second sectors', () => {
            expect(
                computeLayout({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 9 * 12 - 1
                })
            ).toEqual({
                start: 0,
                end: 18
            });
            expect(
                computeLayout({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 9 * 12
                })
            ).toEqual({
                start: 0,
                end: 27
            });
        });

        it('between the second and the third sectors', () => {
            expect(
                computeLayout({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 18 * 12 - 1
                })
            ).toEqual({
                start: 0,
                end: 27
            });
            expect(
                computeLayout({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 18 * 12
                })
            ).toEqual({
                start: 9,
                end: 9 + 27
            });
        });

        it('in the end', () => {
            expect(
                computeLayout({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 54,
                    scrollTop: 52 * 12 - 100
                })
            ).toEqual({
                start: 27,
                end: 27 + 27
            });
            expect(
                computeLayout({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 60 * 12 - 100
                })
            ).toEqual({
                start: 36,
                end: 36 + 24
            });
        });
    });
});
