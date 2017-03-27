import transform from './transform.js';

describe('transform', () => {
    it('filters by column', () => {
        expect(
            transform({
                columns: [
                    {
                        name: 'col',
                        filter: 'tit'
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
        ).toEqual([
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
            transform({
                columns: [
                    {
                        name: 'col1',
                        filter: 'tit'
                    },
                    {
                        name: 'col2',
                        filter: 'val'
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
        ).toEqual([
            {
                id: 3,
                col1: 'pretitle',
                col2: 'prevalue'
            }
        ]);
    });

    it('sorts by column asc', () => {
        expect(
            transform({
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
        ).toEqual([
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
            transform({
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
        ).toEqual([
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
            transform({
                columns: [
                    {
                        name: 'col',
                        sort: 'desc',
                        filter: 'tit'
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
        ).toEqual([
            {
                col: 'title2'
            },
            {
                col: 'tit3'
            },
        ]);
    });

    it('slices page', () => {
        expect(
            transform({
                columns: [],
                gridState: {
                    pager: {
                        page: 1,
                        size: 3
                    }
                }
            }, [
                { col: 'row1' },
                { col: 'row2' },
                { col: 'row3' },
                { col: 'row4' },
                { col: 'row5' },
                { col: 'row6' },
                { col: 'row7' },
                { col: 'row8' },
                { col: 'row9' }
            ])
        ).toEqual([
            { col: 'row4' },
            { col: 'row5' },
            { col: 'row6' },
        ]);
    });

    it('filters numbers', () => {
        expect(
            transform({
                columns: [
                    {
                        name: 'col',
                        filter: '123',
                        sort: 'desc'
                    }
                ]
            }, [
                {
                    col: 1234
                },
                {
                    col: 4123
                },
                {
                    col: 5567
                }
            ])
        ).toEqual([
            {
                col: 4123
            },
            {
                col: 1234
            }
        ]);
    });
});
