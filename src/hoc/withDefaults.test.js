import { mount } from '../utils/testUtils.js';
import withDefaults from './withDefaults.js';
import DefaultColumn from '../DefaultColumn.js';
import DefaultRow from '../DefaultRow.js';

const defaultWidth = 60;

describe('withDefaults hoc', () => {
    it('spreads state columns, columnState, rowState props', () => {
        const results = [];
        const wrapped = withDefaults()(props => results.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            state: {
                columns: [],
                columnState: {},
                rowState: {}
            }
        });
        expect(results[0].columns).toEqual([]);
        expect(results[0].columnState).toEqual({});
        expect(results[0].rowState).toEqual({});
    });

    it('sets default columnState and rowState as an empty object', () => {
        const results = [];
        const wrapped = withDefaults()(props => results.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            state: {
                columns: []
            }
        });
        expect(results[0].columnState).toEqual({});
        expect(results[0].rowState).toEqual({});
    });

    it('sets default columnComponent and rowComponent', () => {
        const results = [];
        const wrapped = withDefaults()(props => results.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            state: {
                columns: []
            }
        });
        expect(results[0].columnComponent).toEqual(DefaultColumn);
        expect(results[0].rowComponent).toEqual(DefaultRow);
    });

    it('sets default column width', () => {
        const results = [];
        const wrapped = withDefaults()(props => results.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            state: {
                columns: [
                    {
                        name: 'col1'
                    },
                    {
                        name: 'col2',
                        minWidth: 120
                    },
                    {
                        name: 'col3',
                        width: 220
                    },
                    {
                        name: 'col4',
                        minWidth: 120,
                        width: 220
                    },
                    {
                        name: 'col5',
                        minWidth: 120,
                        width: 100
                    }
                ]
            }
        });
        expect(results[0].columns).toEqual([
            {
                name: 'col1',
                minWidth: defaultWidth,
                width: defaultWidth
            },
            {
                name: 'col2',
                minWidth: 120,
                width: 120
            },
            {
                name: 'col3',
                minWidth: defaultWidth,
                width: 220
            },
            {
                name: 'col4',
                minWidth: 120,
                width: 220
            },
            {
                name: 'col5',
                minWidth: 120,
                width: 120
            }
        ]);
    });

    it('converts percentage width to number', () => {
        const results = [];
        const wrapped = withDefaults()(props => results.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            viewportWidth: 220,
            state: {
                columns: [
                    {
                        name: 'col1',
                        width: '50%'
                    },
                    {
                        name: 'col2',
                        width: '120'
                    }
                ]
            }
        });
        expect(results[0].columns).toEqual([
            {
                name: 'col1',
                minWidth: defaultWidth,
                width: 110
            },
            {
                name: 'col2',
                minWidth: defaultWidth,
                width: 120
            }
        ]);
    });

    it('sets default header and row heights', () => {
        const results = [];
        const wrapped = withDefaults()(props => results.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            state: {
                columns: []
            }
        });
        expect(results[0].headerHeight).toEqual(0);
        expect(results[0].rowHeight).toEqual(30);
    });
});
