import { expect } from 'chai';
import reducer from './columns.js';
import { moveColumn, moveResizeGhost, resizeColumn, filterColumn, sortColumn } from '../actionCreators.js';

describe('columns reducer', () => {
    it('moves column between left and right', () => {
        expect(
            reducer([
                { name: 'col1' },
                { name: 'col2' },
                { name: 'col3' }
            ], moveColumn('col1', 'col2', 'col3'))
        ).to.deep.equal([
            { name: 'col2' },
            { name: 'col1' },
            { name: 'col3' }
        ]);
    });

    it('moves column after left if right is null', () => {
        expect(
            reducer([
                { name: 'col1' },
                { name: 'col3' },
                { name: 'col2' }
            ], moveColumn('col1', 'col3', null))
        ).to.deep.equal([
            { name: 'col3' },
            { name: 'col1' },
            { name: 'col2' }
        ]);
    });

    it('moves column after itself if right is null and column is the last', () => {
        expect(
            reducer([
                { name: 'col1' },
                { name: 'col2' }
            ], moveColumn('col2', null, 'col2'))
        ).to.deep.equal([
            { name: 'col1' },
            { name: 'col2' }
        ]);
    });

    it('moves column before right if left is null', () => {
        expect(
            reducer([
                { name: 'col3' },
                { name: 'col2' },
                { name: 'col1' }
            ], moveColumn('col1', null, 'col2'))
        ).to.deep.equal([
            { name: 'col3' },
            { name: 'col1' },
            { name: 'col2' }
        ]);
    });

    it('moves column before itself if left is null and column is the first', () => {
        expect(
            reducer([
                { name: 'col1' },
                { name: 'col2' }
            ], moveColumn('col1', null, 'col1'))
        ).to.deep.equal([
            { name: 'col1' },
            { name: 'col2' }
        ]);
    });

    it('does not move columns if left and right are null', () => {
        expect(
            reducer([
                { name: 'col1' },
                { name: 'col2' },
                { name: 'col3' }
            ], moveColumn('col1', null, null))
        ).to.deep.equal([
            { name: 'col1' },
            { name: 'col2' },
            { name: 'col3' }
        ]);
    });

    it('does not affect on move resize ghost', () => {
        expect(
            reducer([
                {
                    name: 'col1',
                    width: 100
                }
            ], moveResizeGhost('col1', 120))
        ).to.deep.equal([
            {
                name: 'col1',
                width: 100
            }
        ]);
    });

    it('changes width on resize column', () => {
        expect(
            reducer([
                {
                    name: 'col1',
                    width: 100
                },
                {
                    name: 'col2',
                    width: 150
                }
            ], resizeColumn('col1', 120))
        ).to.deep.equal([
            {
                name: 'col1',
                width: 120
            },
            {
                name: 'col2',
                width: 150
            }
        ]);
    });

    it('adds filters to columns', () => {
        expect(
            reducer([
                {
                    name: 'col1'
                },
                {
                    name: 'col2'
                }
            ], filterColumn('col1', 'Text'))
        ).to.deep.equal([
            {
                name: 'col1',
                value: 'Text'
            },
            {
                name: 'col2'
            }
        ]);
    });

    it('sorts colummn from null', () => {
        expect(
            reducer([
                {
                    name: 'col1'
                }
            ], sortColumn('col1'))
        ).to.deep.equal([
            {
                name: 'col1',
                sort: 'asc'
            }
        ]);
    });

    it('sorts column from asc', () => {
        expect(
            reducer([
                {
                    name: 'col1',
                    sort: 'asc'
                }
            ], sortColumn('col1'))
        ).to.deep.equal([
            {
                name: 'col1',
                sort: 'desc'
            }
        ]);
    });

    it('sorts column from desc', () => {
        expect(
            reducer([
                {
                    name: 'col1',
                    sort: 'desc'
                }
            ], sortColumn('col1'))
        ).to.deep.equal([
            {
                name: 'col1',
                sort: null
            }
        ]);
    });

    it('removes sort from another columns', () => {
        expect(
            reducer([
                {
                    name: 'col1',
                    sort: 'desc'
                },
                {
                    name: 'col2'
                },
                {
                    name: 'col3'
                }
            ], sortColumn('col2'))
        ).to.deep.equal([
            {
                name: 'col1',
                sort: null
            },
            {
                name: 'col2',
                sort: 'asc'
            },
            {
                name: 'col3'
            }
        ]);
    });
});
