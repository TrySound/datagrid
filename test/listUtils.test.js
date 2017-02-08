import { expect } from 'chai';
import { getKeysByIndex, getVisibleRows } from '../src/listUtils.js';

describe('listUtils', () => {
    describe('getKeysByIndex', () => {
        it('should generate new keys', () => {
            expect(getKeysByIndex(undefined, 0, 2)).to.deep.equal({
                0: 'key_0',
                1: 'key_1',
                2: 'key_2'
            });
        });

        it('should reuse passed keys', () => {
            expect(getKeysByIndex({
                2: 'key_0',
                3: 'key_1'
            }, 0, 3)).to.deep.equal({
                0: 'key_2',
                1: 'key_3',
                2: 'key_0',
                3: 'key_1'
            });
        });

        it('should ignore pass keys with expired indexes', () => {
            expect(getKeysByIndex({
                0: 'key_0',
                1: 'key_1',
                2: 'key_2',
                3: 'key_3'
            }, 2, 5)).to.deep.equal({
                2: 'key_2',
                3: 'key_3',
                4: 'key_0',
                5: 'key_1'
            });
        });
    });

    describe('getVisibleRows', () => {
        it('at the start', () => {
            expect(
                getVisibleRows({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 0
                })
            ).to.deep.equal([0, 18]);
        });

        it('between the first and the second sectors', () => {
            expect(
                getVisibleRows({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 9 * 12 - 1
                })
            ).to.deep.equal([0, 18]);
            expect(
                getVisibleRows({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 9 * 12
                })
            ).to.deep.equal([9, 27]);
        });

        it('between the second and the third sectors', () => {
            expect(
                getVisibleRows({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 18 * 12 - 1
                })
            ).to.deep.equal([9, 27]);
            expect(
                getVisibleRows({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 18 * 12
                })
            ).to.deep.equal([18, 36]);
        });

        it('should save count of visible rows the same to not lost focus', () => {
            expect(
                getVisibleRows({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 54,
                    scrollTop: 52 * 12 - 100
                })
            ).to.deep.equal([36, 54]);
            expect(
                getVisibleRows({
                    viewportHeight: 100,
                    rowHeight: 12,
                    rowsCount: 60,
                    scrollTop: 60 * 12 - 100
                })
            ).to.deep.equal([42, 60]);
        });
    });
});
