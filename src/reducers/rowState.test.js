import { expect } from 'chai';
import reducer from './rowState.js';
import { selectRow } from '../actionCreators.js';

describe('rowState reducer', () => {
    it('selects row', () => {
        expect(
            reducer({
                selectedIndex: 1,
                param: -1
            }, selectRow(3))
        ).to.deep.equal({
            selectedIndex: 3,
            param: -1
        });
    });
});
