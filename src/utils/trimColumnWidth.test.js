import { expect } from 'chai';
import { trimColumnWidth } from './index.js';

describe('trimColumnWidth', () => {
    it('trims value with minWidth', () => {
        expect(trimColumnWidth({ minWidth: 100 }, 90)).to.deep.equal(100);
    });

    it('trims value with maxWidth', () => {
        expect(trimColumnWidth({ maxWidth: 200 }, 210)).to.deep.equal(200);
    });

    it('trims with default minWidth 0', () => {
        expect(trimColumnWidth({}, -10)).to.deep.equal(0);
    });

    it('does not trim in range', () => {
        expect(trimColumnWidth({}, 500)).to.deep.equal(500);
    });
});
