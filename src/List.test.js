// import { expect } from 'chai';
import createElement from 'inferno-create-element';
import { mount } from './utils/testUtils.js';
import List from './List.js';

const renderList = props => mount(List).setProps(props);
const getListDivs = props => {
    const { setProps, getWrapper } = mount(List);
    setProps(Object.assign({
        component: props => <div>{props.datum}</div>
    }, props));
    return Array.from(getWrapper().querySelectorAll('div'));
};
const getContainer = list => list[0];
const getRowWrapper = (list, index) => list[2 + index * 2];

describe('List component', () => {
    it('passes datum and index or row to component', () => {
        const result = [];
        renderList({
            scrollTop: 0,
            viewportHeight: 60,
            rowHeight: 30,
            data: ['data1', 'data2'],
            component: props => result.push(props)
        });
        expect(result).toEqual([
            { datum: 'data1', index: 0 },
            { datum: 'data2', index: 1 }
        ]);
    });

    it('19ths row edge case', () => {
        const result = [];
        renderList({
            scrollTop: 336 - 60,
            viewportHeight: 360 - 60,
            rowHeight: 30,
            data: Array(40).fill(0).map((_, index) => `data${index}`),
            component: props => result.push(props)
        });
        expect(result).toEqual(Array(21).fill(0).map((_, index) => ({
            datum: `data${index}`,
            index
        })));
    });

    it('container height is a sum of all rows', () => {
        const list = getListDivs({
            scrollTop: 0,
            viewportHeight: 100,
            rowHeight: 30,
            data: ['data1', 'data2']
        });
        expect(getContainer(list).style.height).toEqual('60px');
    });

    it('each row wrapper should have height', () => {
        const list = getListDivs({
            scrollTop: 0,
            viewportHeight: 100,
            rowHeight: 30,
            data: ['data1', 'data2']
        });
        expect(getRowWrapper(list, 0).style.height).toEqual('30px');
        expect(getRowWrapper(list, 1).style.height).toEqual('30px');
    });
});
