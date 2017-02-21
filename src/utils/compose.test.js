import { expect } from 'chai';
import compose from './compose.js';

describe('compose', () => {
    it('composes from right to left', () => {
        const double = x => x * 2;
        const square = x => x * x;
        expect(compose(square)(5)).to.equal(25);
        expect(compose(square, double)(5)).to.equal(100);
        expect(compose(double, square, double)(5)).to.equal(200);
    });

    it('can be seeded with multiple arguments', () => {
        const square = x => x * x;
        const add = (x, y) => x + y;
        expect(compose(square, add)(1, 2)).to.equal(9);
    });

    it('returns the identity function if given no arguments', () => {
        expect(compose()(1, 2)).to.equal(1);
        expect(compose()(3)).to.equal(3);
        expect(compose()()).to.equal(undefined);
    });

    it('returns the first function if given only one', () => {
        const fn = () => {};
        expect(compose(fn)).to.equal(fn);
    });
});
