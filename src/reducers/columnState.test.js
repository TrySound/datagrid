import { expect } from 'chai';
import columnStateReducer from './columnState.js';
import { markMoveDest, moveColumn, moveResizeGhost, resizeColumn } from '../actionCreators.js';

describe('columnState reducer', () => {
    it('marks column move destination', () => {
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

    it('moves resize ghost', () => {
        expect(
            columnStateReducer({
                userParam: -1
            }, moveResizeGhost('col', 20))
        ).to.deep.equal({
            userParam: -1,
            resizing: {
                name: 'col',
                position: 20
            }
        });
    });

    it('clears ghost mark on column resize', () => {
        expect(
            columnStateReducer({
                userParam: -1,
                resizing: {
                    name: 'col',
                    position: 20
                }
            }, resizeColumn('col', 10))
        ).to.deep.equal({
            userParam: -1,
            resizing: null
        });
    });
});
