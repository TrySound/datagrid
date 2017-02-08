import { getColumnWidth } from '../src/utils.js';

describe('getColumnWidth', () => {
    it('should trim value with minWidth', () => {
        expect(getColumnWidth({ minWidth: 100 }, 90)).toEqual(100);
    });

    it('should trim value with maxWidth', () => {
        expect(getColumnWidth({ maxWidth: 200 }, 210)).toEqual(200);
    });

    it('should trim with default minWidth 20', () => {
        expect(getColumnWidth({}, 10)).toEqual(20);
    });

    it('should not trim in range', () => {
        expect(getColumnWidth({}, 500)).toEqual(500);
    });
});
