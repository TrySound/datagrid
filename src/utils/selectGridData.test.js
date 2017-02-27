import { expect } from 'chai';
import selectGridData from './selectGridData.js';

describe('selectGridData', () => {
    it('filters by column', () => {
        expect(
            selectGridData({
                columns: [
                    {
                        name: 'col',
                        value: 'tit'
                    }
                ]
            }, [
                {
                    id: 1,
                    col: 'Title'
                },
                {
                    id: 2,
                    col: 'lorem'
                },
                {
                    id: 3,
                    col: 'title'
                },
                {
                    id: 4,
                    col: 'pretit'
                },
                {
                    id: 5,
                    col: 'lorem'
                }
            ])
        ).to.deep.equal([
            {
                id: 1,
                col: 'Title'
            },
            {
                id: 3,
                col: 'title'
            },
            {
                id: 4,
                col: 'pretit'
            }
        ]);
    });

    it('filters by all columns', () => {
        expect(
            selectGridData({
                columns: [
                    {
                        name: 'col1',
                        value: 'tit'
                    },
                    {
                        name: 'col2',
                        value: 'val'
                    }
                ]
            }, [
                {
                    id: 1,
                    col1: 'tit',
                    col2: 'lorem'
                },
                {
                    id: 2,
                    col1: 'lorem',
                    col2: 'val'
                },
                {
                    id: 3,
                    col1: 'pretitle',
                    col2: 'prevalue'
                }
            ])
        ).to.deep.equal([
            {
                id: 3,
                col1: 'pretitle',
                col2: 'prevalue'
            }
        ]);
    });

    it('sorts by column asc', () => {
        expect(
            selectGridData({
                columns: [
                    {
                        name: 'col',
                        sort: 'asc'
                    }
                ]
            }, [
                {
                    col: 2
                },
                {
                    col: 1
                },
                {
                    col: 1
                },
                {
                    col: 3
                }
            ])
        ).to.deep.equal([
            {
                col: 1
            },
            {
                col: 1
            },
            {
                col: 2
            },
            {
                col: 3
            }
        ]);
    });

    it('sorts by column desc', () => {
        expect(
            selectGridData({
                columns: [
                    {
                        name: 'col',
                        sort: 'desc'
                    }
                ]
            }, [
                {
                    col: 2
                },
                {
                    col: 1
                },
                {
                    col: 3
                }
            ])
        ).to.deep.equal([
            {
                col: 3
            },
            {
                col: 2
            },
            {
                col: 1
            }
        ]);
    });

    it('filters and sorts by column', () => {
        expect(
            selectGridData({
                columns: [
                    {
                        name: 'col',
                        sort: 'desc',
                        value: 'tit'
                    }
                ]
            }, [
                {
                    col: 'tit3'
                },
                {
                    col: 'lorem1'
                },
                {
                    col: 'title2'
                }
            ])
        ).to.deep.equal([
            {
                col: 'title2'
            },
            {
                col: 'tit3'
            },
        ]);
    });
});
