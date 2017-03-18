import { trimColumnWidth } from './index.js';

describe('trimColumnWidth', () => {
    it('trims value with minWidth', () => {
        expect(trimColumnWidth({ minWidth: 100 }, 90)).toEqual(100);
    });

    it('trims value with maxWidth', () => {
        expect(trimColumnWidth({ maxWidth: 200 }, 210)).toEqual(200);
    });

    it('trims with default minWidth 0', () => {
        expect(trimColumnWidth({}, -10)).toEqual(0);
    });

    it('does not trim in range', () => {
        expect(trimColumnWidth({}, 500)).toEqual(500);
    });
});
