import { mount } from './utils/testUtils.js';
import List from './List.js';

test('passes datum and index or row to component', () => {
    const result = [];
    mount(List).setProps({
        start: 0,
        end: 1,
        rowHeight: 30,
        data: ['data1', 'data2'],
        rowComponent: props => {
            result.push(props);
            return null;
        }
    });
    expect(result).toEqual([
        { datum: 'data1', index: 0 },
        { datum: 'data2', index: 1 }
    ]);
});

test('container height is a sum of all rows', () => {
    const { setProps, getWrapper } = mount(List);
    setProps({
        start: 0,
        end: 3,
        rowHeight: 30,
        data: ['data1', 'data2'],
        rowComponent: () => null
    });
    expect(getWrapper().children[0].style.height).toEqual('60px');
});

test('each row wrapper should have height', () => {
    const { setProps, getWrapper } = mount(List);
    setProps({
        start: 0,
        end: 3,
        rowHeight: 30,
        data: ['data1', 'data2'],
        rowComponent: () => null
    });
    const rows = getWrapper().children[0].children[0].children;
    expect(rows[0].style.height).toEqual('30px');
    expect(rows[1].style.height).toEqual('30px');
});

test('passes rowProps to rowComponent', () => {
    const results = [];
    mount(List).setProps({
        start: 0,
        end: 3,
        rowHeight: 30,
        data: ['data1', 'data2'],
        rowComponent: props => {
            results.push(props);
            return null;
        },
        rowProps: { a: 'a', b: 'b' }
    });
    expect(results).toEqual([
        {
            datum: 'data1',
            index: 0,
            a: 'a',
            b: 'b'
        },
        {
            datum: 'data2',
            index: 1,
            a: 'a',
            b: 'b'
        }
    ]);
});
