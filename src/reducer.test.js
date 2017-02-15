import { expect } from 'chai';
import reducer from './reducer.js';
import { markMoveDest, moveColumn, moveResizeGhost, resizeColumn } from './actionCreators.js';

describe('reducer', () => {
    it('marks move destinations with moveLeft and moveRight flags', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1',
                        moveLeft: true
                    },
                    {
                        name: 'col2'
                    },
                    {
                        name: 'col3'
                    },
                    {
                        name: 'col4',
                        moveRight: true
                    }
                ]
            }, markMoveDest('col1', 'col2', 'col3'))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col1',
                    moveLeft: false,
                    moveRight: false
                },
                {
                    name: 'col2',
                    moveLeft: false,
                    moveRight: true
                },
                {
                    name: 'col3',
                    moveLeft: true,
                    moveRight: false
                },
                {
                    name: 'col4',
                    moveLeft: false,
                    moveRight: false
                }
            ]
        });
    });

    it('marks only left column if right is null', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1'
                    },
                    {
                        name: 'col2'
                    }
                ]
            }, markMoveDest('col1', 'col2', null))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col1'
                },
                {
                    name: 'col2',
                    moveLeft: false,
                    moveRight: true
                }
            ]
        });
    });

    it('marks only right column if left is null', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1'
                    },
                    {
                        name: 'col2'
                    }
                ]
            }, markMoveDest('col2', null, 'col1'))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col1',
                    moveLeft: true,
                    moveRight: false
                },
                {
                    name: 'col2'
                }
            ]
        });
    });

    it('moves column between left and right', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1'
                    },
                    {
                        name: 'col2',
                        moveRight: true
                    },
                    {
                        name: 'col3',
                        moveLeft: true
                    }
                ]
            }, moveColumn('col1', 'col2', 'col3'))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col2',
                    moveLeft: false,
                    moveRight: false
                },
                {
                    name: 'col1'
                },
                {
                    name: 'col3',
                    moveLeft: false,
                    moveRight: false
                }
            ]
        });
    });

    it('moves column after left if right is null', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1'
                    },
                    {
                        name: 'col3'
                    },
                    {
                        name: 'col2'
                    }
                ]
            }, moveColumn('col1', 'col3', null))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col3'
                },
                {
                    name: 'col1'
                },
                {
                    name: 'col2'
                }
            ]
        });
    });

    it('moves column after itself if right is null and column is the last', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1'
                    },
                    {
                        name: 'col2'
                    }
                ]
            }, moveColumn('col2', null, 'col2'))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col1'
                },
                {
                    name: 'col2'
                }
            ]
        });
    });

    it('moves column before right if left is null', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col3'
                    },
                    {
                        name: 'col2'
                    },
                    {
                        name: 'col1'
                    }
                ]
            }, moveColumn('col1', null, 'col2'))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col3'
                },
                {
                    name: 'col1'
                },
                {
                    name: 'col2'
                }
            ]
        });
    });

    it('moves column before itself if left is null and column is the first', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1'
                    },
                    {
                        name: 'col2'
                    }
                ]
            }, moveColumn('col1', null, 'col1'))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col1'
                },
                {
                    name: 'col2'
                }
            ]
        });
    });

    it('does not affect on move resize ghost', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1',
                        width: 100
                    }
                ]
            }, moveResizeGhost('col1', 120))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col1',
                    width: 100
                }
            ]
        });
    });

    it('changes width on resize column', () => {
        expect(
            reducer({
                columns: [
                    {
                        name: 'col1',
                        width: 100
                    }
                ]
            }, resizeColumn('col1', 120))
        ).to.deep.equal({
            columns: [
                {
                    name: 'col1',
                    width: 120
                }
            ]
        });
    });
});
