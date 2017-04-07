import { mount } from '../utils/testUtils.js';
import withDefaults from './withDefaults.js';
import DefaultColumn from '../DefaultColumn.js';
import DefaultRow from '../DefaultRow.js';
import { transform } from '../utils';

const defaultWidth = 60;

test('does not spread columns and gridState props', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    const { setProps } = mount(wrapped);
    setProps({
        columns: [],
        state: {
            columns: [1],
            gridState: {},
            rowState: {}
        }
    });
    expect(results[0].columns).toEqual([]);
    expect(results[0].columnState).toEqual(undefined);
    expect(results[0].rowState).toEqual(undefined);
});

test('sets default gridState as an empty object', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    const { setProps } = mount(wrapped);
    setProps({
        columns: []
    });
    expect(results[0].gridState).toEqual({});
});

test('sets default columnComponent and rowComponent', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    const { setProps } = mount(wrapped);
    setProps({
        columns: []
    });
    expect(results[0].columnComponent).toEqual(DefaultColumn);
    expect(results[0].rowComponent).toEqual(DefaultRow);
});

test('sets default column width', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    const { setProps } = mount(wrapped);
    setProps({
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

test('converts percentage width to number', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    const { setProps } = mount(wrapped);
    setProps({
        viewportWidth: 220,
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

test('sets default header and row heights', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    const { setProps } = mount(wrapped);
    setProps({
        columns: []
    });
    expect(results[0].headerHeight).toEqual(0);
    expect(results[0].rowHeight).toEqual(30);
});

test('passes default data transform if nothing passes', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    mount(wrapped).setProps({
        columns: []
    });
    expect(results[0].transform).toBe(transform);
});

test('does not change passed transform', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    const customTransform = () => {};
    mount(wrapped).setProps({
        columns: [],
        transform: customTransform
    });
    expect(results[0].transform).toBe(customTransform);
});

test('pass stub transform on false', () => {
    const results = [];
    const wrapped = withDefaults()(props => {
        results.push(props);
        return null;
    });
    mount(wrapped).setProps({
        columns: [],
        transform: false
    });
    const stub = [];
    expect(results[0].transform(stub)).toBe(stub);
});
