// import { expect } from 'chai';
import createElement from 'inferno-create-element';
import { mount } from './utils/testUtils.js';
import List from './List.js';

describe('List component', () => {
    it('passes datum and index or row to component', () => {
        const result = [];
        mount(List).setProps({
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

    it('container height is a sum of all rows', () => {
        const { setProps, getWrapper } = mount(List);
        setProps({
            scrollTop: 0,
            viewportHeight: 100,
            rowHeight: 30,
            data: ['data1', 'data2'],
            component: () => {}
        });
        expect(getWrapper().children[0].style.height).toEqual('60px');
    });

    it('each row wrapper should have height', () => {
        const { setProps, getWrapper } = mount(List);
        setProps({
            scrollTop: 0,
            viewportHeight: 100,
            rowHeight: 30,
            data: ['data1', 'data2'],
            component: () => {}
        });
        const rows = getWrapper().children[0].children[0].children;
        expect(rows[0].style.height).toEqual('30px');
        expect(rows[1].style.height).toEqual('30px');
    });
});
