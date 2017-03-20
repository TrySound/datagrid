import gridStateReducer from './gridState.js';
import { markMoveDest, moveColumn, resizeColumn, filterColumn, sortColumn, selectRow } from '../actionCreators.js';

describe('gridState reducer', () => {
    it('marks column move destination', () => {
        expect(
            gridStateReducer({
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
            gridStateReducer({
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
            gridStateReducer({
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

    it('selects row', () => {
        expect(
            gridStateReducer({
                selectedIndex: 1,
                param: -1
            }, selectRow(3))
        ).toEqual({
            selectedIndex: 3,
            param: -1
        });
    });

    it('refreshes page on filter', () => {
        expect(
            gridStateReducer({
                userParam1: -1,
                pager: {
                    userParam2: -1,
                    page: 10,
                    size: 10
                }
            }, filterColumn('any', 'column'))
        ).toEqual({
            userParam1: -1,
            pager: {
                userParam2: -1,
                page: 0,
                size: 10
            }
        });
        expect(
            gridStateReducer({
                userParam1: -1,
                pager: null
            }, filterColumn('any', 'column'))
        ).toEqual({
            userParam1: -1,
            pager: null
        });
    });

    it('refreshes page on sort', () => {
        expect(
            gridStateReducer({
                userParam1: -1,
                pager: {
                    userParam2: -1,
                    page: 10,
                    size: 10
                }
            }, sortColumn('any'))
        ).toEqual({
            userParam1: -1,
            pager: {
                userParam2: -1,
                page: 0,
                size: 10
            }
        });
        expect(
            gridStateReducer({
                userParam1: -1,
                pager: null
            }, sortColumn('any'))
        ).toEqual({
            userParam1: -1,
            pager: null
        });
    });
});
