import { expect } from 'chai';
import columnStateReducer from './columnState.js';
import { markMoveDest, moveColumn } from '../actionCreators.js';

describe('columnState reducer', () => {
    it('marks column move desctination', () => {
        expect(
            columnStateReducer({
                userParam: -1
            }, markMoveDest('col1', 'col2', 'col3'))
        ).to.deep.equal({
            userParam: -1,
            moving: {
                name: 'col1',
                left: 'col2',
                right: 'col3'
            }
        });
    });

    it('clears marks on column move', () => {
        expect(
            columnStateReducer({
                userParam: -1,
                moving: {
                    name: 'col1',
                    left: 'col2',
                    right: 'col3'
                }
            }, moveColumn('col1', 'col2', 'col3'))
        ).to.deep.equal({
            userParam: -1,
            moving: null
        });
    });
});
