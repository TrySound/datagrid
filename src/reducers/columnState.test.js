import columnStateReducer from './columnState.js';
import { markMoveDest, moveColumn, resizeColumn } from '../actionCreators.js';

describe('columnState reducer', () => {
    it('marks column move destination', () => {
        expect(
            columnStateReducer({
                userParam: -1
            }, markMoveDest('col1', 'col2', 'col3'))
        ).toEqual({
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
        ).toEqual({
            userParam: -1,
            moving: null
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
        ).toEqual({
            userParam: -1,
            resizing: null
        });
    });
});
